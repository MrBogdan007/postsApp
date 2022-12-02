import { AsyncThunkAction, AnyAction } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchComment } from "../redux/reducers/comments";
import SinglePost from "./SinglePost";
import CommentIcon from "@mui/icons-material/Comment";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
const PostList = () => {
  const { id } = useParams();
  const postId = Number(id);
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.postReducer);
  const users = useAppSelector((state) => state.userReducer);
  const [readMoreValue,setReadMoreValue] = useState(false);
  const onePost = posts.find((onepost) => onepost.id === postId)!;
  const post = posts.find(post => postId === post.id);
  const madeBy = users.find(user=> user.id === post?.userId)
  const otherPosts = posts.filter(postItem => postItem?.userId === madeBy!.id )
  console.log(otherPosts);
  let i = 1;
  const readMore = () => {
    setReadMoreValue(prev => !prev)
  }
  useEffect(() => {
    console.log(post?.userId);
    dispatch(fetchComment(post!.userId));
  }, []);
  const comments = useAppSelector((state) => state.commentReducer);
  console.log(readMoreValue);
  
  return (
    <>
    <div className="postOne container">
      <div className="post-single" key={onePost.id}>
        <div className="post-single__title">{onePost.title}</div>
        <div className="post-single__body">{onePost.body}</div>
        <div className="post-single_madeby">
          By {madeBy!.name } <CommentIcon color="primary" />
        </div>
      </div>
    </div>
    <div className="postOne__comments container">
      Comments ({comments.length})
    </div>
    <div style={{maxHeight: readMoreValue? '500px': '320px' }} className="comments">
    {comments.length > 0 ? comments.map((comment) => {
      return (
       
        <div key={comment.id}  className="comment container">
          <div className="comment-item">
            <div className="comment-item_avatar">
              <Stack direction="row" spacing={2}>
                <Avatar alt="Cindy Baker" src={require("../img/3.jpg")} />
              </Stack>
            </div>
            <div className="comment-item_descr">
              <div className="comment-item__name">{comment.name}</div>
              <div className="comment-item__email">{comment.email}</div>
              <div className="comment-item__body">{comment.body}</div>
            </div>
          </div>
        </div>

      );
    }):'Loading'}
    
    <div style={{bottom: readMoreValue ? '150px': '10px'}} onClick={readMore} className="readMore"> {readMoreValue? 'Hide': 'Read'} 2 more comments</div>
    </div>

     <div  className="postOne__comments container">
      Other posts made by {madeBy!.name}
    </div>
    {
      otherPosts.map(other => 
      <div className="other container">
        <div className="other-title">
         {i++ }. {other.title}
        </div>
        <div className="other-body">
        {other.body}
        </div>
      </div>)
    }
    {}
  </>
  );
};

export default PostList;
