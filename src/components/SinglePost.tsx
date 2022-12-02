import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchPosts } from "../redux/reducers/posts";
import { OnePost } from "../types/users";
import CommentIcon from "@mui/icons-material/Comment";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { fetchComment } from "../redux/reducers/comments";
import PostList from "./PostList";
import { AsyncThunkAction, Dispatch, AnyAction } from "@reduxjs/toolkit";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

const SinglePost = ({ post, madeby, idOne }: OnePost) => {
  const navigate = useNavigate();

  const { id } = useParams();
  const posts = useAppSelector((state) => state.postReducer);
  const users = useAppSelector((state) => state.userReducer);
  const postId = Number(id);
  const dispatch = useAppDispatch();
  const postList = () => {
    navigate(`/posts/${idOne}`);
  };

  return (
    <>
      <div onClick={postList} className="post">
        <div className="post-item" key={post.id}>
          <div className="post-item__title">{post.title}</div>
          <div className="post-item__body">{post.body}</div>
          <div className="post-item__madeby">
            By {madeby ? madeby.name : ""} <CommentIcon color="primary" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
