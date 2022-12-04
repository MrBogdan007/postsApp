import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { createPost, fetchPosts } from "../redux/reducers/posts";

import { fetchUsers } from "../redux/reducers/users";
import SinglePost from "./SinglePost";

const Posts = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.postReducer);
  const users = useAppSelector((state) => state.userReducer);
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [search, setSearch] = useState("");
  const comments = useAppSelector((state) => state.commentReducer);
  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const postList = posts.filter((item) => item.title.includes(search));


  const addPost = () => {

    dispatch(createPost({
      title:  postTitle,
      body: postBody,
    }));
  }
  
  return (
    <>
      <div className="search">
        <input
          type="text"
          onChange={(e) => onInput(e)}
          placeholder="Search for a post"
        />
      </div>
      <div className="container">
      <label htmlFor="text">Change title: </label>
      <input style={{display: 'block'}} type="text" onChange={(e) => setPostTitle(e.target.value)}/>
      <label  style={{display: 'block'}} htmlFor="text">Change description: </label>
      <input style={{display: 'block'}} type="text" onChange={(e) => setPostBody(e.target.value)}/>
      <button onClick={addPost}>Create post</button>
      </div>

      <div className="posts container">
        {posts.length > 0
          ? postList.map((post) => {
              const madeBy = users.find((user) => user.id === post.userId)!;

              return <SinglePost  key={post.id} idOne={post.id} madeby={madeBy} post={post} />;
            })
          : "Loading ... "}
      </div>
    </>
  );
};

export default Posts;
