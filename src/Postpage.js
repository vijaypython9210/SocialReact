import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "./context/DataContext";

const Postpage = () => {
  const { id } = useParams();
  const {posts,handleDelete,handleEdit}=useContext(DataContext)
  const data = posts.find((post) => post.id.toString() === id);
  return (
    <main>
      <div
        className="card mb-3 col-6 mx-auto my-5 text-larger"
      >
        <div className="card-header text-center text-capitalize bg-primary"><b>{(data.name.toUpperCase())}</b></div>
        <div className="card-body">
          <h5 className="card-title my-3">{(data.title).toUpperCase()}</h5>
          <p className="card-text">{data.body}</p>
          <button className="btn btn-danger" onClick={()=>{handleDelete(data.id)}}>Delete</button>
          <button className="btn btn-primary float-end" onClick={()=>{handleEdit(data.id)}}>Update</button>
        </div>
      </div>
    </main>
  );
};

export default Postpage;
