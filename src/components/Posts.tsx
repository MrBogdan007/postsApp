import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { fetchPosts } from "../redux/reducers/posts";
import { fetchUsers } from "../redux/reducers/users";

const Posts = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(state => state.postReducer);
  useEffect(() => {
    dispatch(fetchPosts());
  },[])
  return (
    <div>
      {
        posts.map(post => 
          <div key={post.id}>
            <div>{post.title}</div>
            <div>{post.body}</div>
            <div></div>
          </div>
          )
      }
    </div>
  )
}

export default Posts