import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchPosts } from "../redux/reducers/posts";

import { fetchUsers } from "../redux/reducers/users";
import SinglePost from "./SinglePost";

const Posts = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.postReducer);

  const users = useAppSelector((state) => state.userReducer);
  const [search, setSearch] = useState("");

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const postList = posts.filter((item) => item.title.includes(search));

  return (
    <>
      <div className="search">
        <input
          type="text"
          onChange={(e) => onInput(e)}
          placeholder="Search for a post"
        />
      </div>
      <div className="posts container">
        {users.length > 0
          ? postList.map((post) => {
              const madeBy = users.find((user) => user.id === post.userId)!;

              return <SinglePost key={post.id} madeby={madeBy} post={post} />;
            })
          : "Loading ... "}
      </div>
    </>
  );
};

export default Posts;
