import React from 'react'
import { useParams } from 'react-router-dom'
const PostList = () => {
   const {id} = useParams();
   console.log(id);
   
  return (
    <div>PostList</div>
  )
}

export default PostList