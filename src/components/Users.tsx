import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { fetchUsers } from "../redux/reducers/users";

const Users = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  },[])
  const users = useAppSelector(state => state.userReducer);
  return (
    <div>
    {
      users.map(post => 
        <div key={post.id}>
          <div>{post.name}</div>
          <div>{post.username}</div>
          <div></div>
        </div>
        )
    }
  </div>
  )
}

export default Users