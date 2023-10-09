import { useState, useEffect, createContext } from "react";
import link from "../api/link";
import useFetchApi from "../hooks/useFetchApi";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [name, setName] = useState("");
  const [btn, setBtn] = useState("submit");
  const [updateId, setUpdataId] = useState();
  const navigate = useNavigate();
  const [reqName, setReqName] = useState(null);
  const [reqTitle, setReqTitle] = useState(null);
  const [reqBody, setReqBody] = useState(null);
  let excute = true;
  const { data, error, loading } = useFetchApi("http://localhost:3500/posts");
  // const api='http://localhost:3500'

  useEffect(() => {
    setPosts(data);
  }, [data]);

  useEffect(() => {
    const ins = posts.filter((post) =>
      post.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchList(ins.reverse());
  }, [posts, search]);

  async function handleSubmit() {
    validate();
    if (excute) {
      const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
      const newData = {
        id: id,
        name: name,
        title: postTitle,
        body: postBody,
      };

      try {
        await link.post("/posts", newData);
        const newPost = [...posts, newData];
        setPosts(newPost);
        alert("Post Added Successfully" + posts.length);
        setName("");
        setPostTitle("");
        setPostBody("");
        navigate("/");
      } catch (err) {
        console.log(err.message);
      }
    } else {
      console.log("Excute failed");
    }
  }

  function validate() {
    if (name.length === 0) {
      setReqName("");
      return (excute = false);
    }

    if (postTitle.length === 0) {
      setReqTitle("");
      return (excute = false);
    }

    if (postBody.length === 0) {
      setReqBody("");
      return (excute = false);
    }

    setReqName(null);
    setReqTitle(null);
    setReqBody(null);
    return (excute = true);
  }

  async function handleDelete(id) {
    try {
      await link.delete(`/posts/${id}`);
      const data = posts.filter((post) => post.id !== id);
      setPosts(data);
      alert("Post Deleted Successfully");
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  }

  function handleEdit(id) {
    const data = posts.filter((post) => post.id === id);
    console.log(data[0]);
    setName(data[0].name);
    setPostTitle(data[0].title);
    setPostBody(data[0].body);
    setBtn("update");
    setUpdataId(id);
    navigate("/newPost");
  }

  async function handleUpdate() {
    try {
      const fetchlessData = posts.filter((post) => post.id !== updateId);
      const updateData = {
        id: updateId,
        name: name,
        title: postTitle,
        body: postBody,
      };
      const updatePost = [...fetchlessData, updateData];
      console.log(updatePost);
      await link.put(`/posts/${updateId}`, updateData);
      setPosts(updatePost);
      alert("Post Updated Successfully");
      setName("");
      setPostTitle("");
      setPostBody("");
      setBtn("submit");
      setUpdataId();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  }
  return(
  <DataContext.Provider
    value={{
      search,
      setSearch,
      searchList,
      posts,
      error,
      loading,
      handleDelete,
      handleEdit,
      postTitle,
      setPostTitle,
      postBody,
      setPostBody,
      name,
      setName,
      reqName,
      reqTitle,
      reqBody,
      btn,
      handleSubmit,
      handleUpdate,
    }}
  >
    {children}
  </DataContext.Provider>)
};

export default DataContext;
