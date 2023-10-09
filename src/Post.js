import React from 'react'
import { Link } from 'react-router-dom'
import './index.css';

const Post = ({id,post}) => {
  return (
      <div className="card text-center">
          <Link to={`post/${post.id}`}> 
            <div className="card-header bg-primary h3 Posthead text-decoration-none ">{(post.name).toUpperCase()}</div></Link>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body.length < 25 ? post.body : `${(post.body).slice(0,26)}....`}</p>
            </div>
          </div>
    
  )
}

export default Post
