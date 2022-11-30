import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchPosts } from "../redux/reducers/posts";
import { SingleUser } from "../types/singleUser";

const SinglePost = ({post,madeby}:SingleUser) => {
   
return(

   <div className="post">
   <div className="post-item" key={post.id}>
     <div className="post-item__title">{post.title}</div>
     <div className="post-item__body">{post.body}</div>
     <div className="post-item__madeby">{madeby.name}</div>
   </div>
 </div>

)
     
    
  
};



export default SinglePost;
