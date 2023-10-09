import React, { useContext } from "react";
import DataContext from "./context/DataContext";

const Newpost = () => {
  const {name,setName,postTitle,setPostTitle,postBody,setPostBody,reqName,reqTitle,reqBody,handleSubmit,handleUpdate,btn}=useContext(DataContext)
  return (
    <main className="container">
      <h1>NewPost</h1>
      <form className="col-12 text-center" onSubmit={e => e.preventDefault()}>
        <div className="row">
        <div className="d-flex flex-column justify-content-between col-5 float-start">
          <input
            type="text"
            value={name}
            onChange={e => {setName(e.target.value)}}
            placeholder="Name Here"
            className="form-control my-4"
            required
          />
          <input
            type="text"
            value={postTitle}
            onChange={e => {setPostTitle(e.target.value);}}
            placeholder="Title Here"
            className="form-control my-4"
            required
          />
          <textarea
            name="postContent"
            id=""
            rows={10}
            value={postBody}
            required
            onChange={(e) => {
              setPostBody(e.target.value);
            }}
          >{postBody}</textarea>
          {(btn==='submit') ? <button className="btn btn-primary col-4 my-3 form-control" onClick={handleSubmit}>Submit</button>:
          <button className="btn btn-success col-4 my-3" onClick={handleUpdate}>Update</button>}
        </div>
        <div className="col-6 float-end text-center">
              {reqName === name ? <p className="text-danger text-start">Name is Required</p>:''}
              {reqTitle === postTitle ? <p className="text-danger text-start">Title is Required</p>:''}
              {reqBody === postBody ? <p className="text-danger text-start">Body is Required</p>:''}
        </div>
        </div>
      </form>
    </main>
  );
};

export default Newpost;
