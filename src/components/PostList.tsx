import { AsyncThunkAction, AnyAction } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
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
  console.log(postId);
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.postReducer);
  const users = useAppSelector((state) => state.userReducer);
  const onePost = posts.find((onepost) => onepost.id === postId)!;
  const madeBy = users.find((user) => user.id === postId)!;
  useEffect(() => {
    dispatch(fetchComment(postId!));
  }, []);
  const comments = useAppSelector((state) => state.commentReducer);
  console.log(comments);

  return (
    <>
      {comments.length > 0 ? (
        <>
          <div className="postOne container">
            <div className="post-single" key={onePost.id}>
              <div className="post-single__title">{onePost.title}</div>
              <div className="post-single__body">{onePost.body}</div>
              <div className="post-single_madeby">
                By {madeBy ? madeBy.name : ""} <CommentIcon color="primary" />
              </div>
            </div>
          </div>
          <div className="postOne__comments container">
            Comments ({comments.length})
          </div>
          {comments.map((comment) => {
            {
              console.log(comment.id);
            }
            return (
              <div key={comment.id} className="comment container">
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
          })}
        </>
      ) : (
        "loading"
      )}
    </>
  );
};

export default PostList;
