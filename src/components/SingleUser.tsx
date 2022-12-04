import React from 'react'
import { useNavigate } from 'react-router-dom'
import { OneUser } from '../types/users'

const SingleUser = ({user,postsLength,id}:OneUser) => {
  const navigate = useNavigate()
  const showUserList = () => {
    navigate(`/users/${id}`)
  }
  return (
       <ul onClick={showUserList} className="user" key={user.id}>
         <li className="user-title" >{user.name}</li>
         <div className="user-body">
         <li>{user.username}</li>
         <li>{user.email}</li>
         <li>{user.phone}</li>
         <li>{user.website}</li>
         </div>
         <div className="user-posts">
          {postsLength} posts
         </div>
         
       </ul>
       )
   
 
  
}

export default SingleUser