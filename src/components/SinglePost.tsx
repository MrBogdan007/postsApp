import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchPosts } from "../redux/reducers/posts";
import { OnePost } from "../types/users";
import CommentIcon from "@mui/icons-material/Comment";
import { useNavigate, useParams } from "react-router-dom";
import { fetchComment } from "../redux/reducers/comments";

const SinglePost = ({ post, madeby,id }: OnePost) => {
  const navigate = useNavigate();
  const postList = (id: number) => {
    navigate(`/${id}`);
  };





  
  return(
<>
 

  <div onClick={() => postList(post.id)} className="post">
<div className="post-item" key={post.id}>
  <div className="post-item__title">{post.title}</div>
  <div className="post-item__body">{post.body}</div>
  <div className="post-item__madeby">By {madeby ? madeby.name:''} <CommentIcon color="primary"/></div>
</div>
</div>
  
</> 
   )
};

export default SinglePost;
