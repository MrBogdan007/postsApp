import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { fetchUsers } from "../redux/reducers/users";
import SingleUser from "./SingleUser";

const Users = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(state => state.userReducer);
  const posts = useAppSelector(state => state.postReducer);
  return(
  <div className="container users">
    {
      users.map(user => {
        const postsLength = posts.filter(post => post.userId === user.id).length;
        return (
          <SingleUser user={user} postsLength={postsLength}/>
        )
      })
    }
    </div>
  )
}

export default Users