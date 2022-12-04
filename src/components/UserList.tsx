import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import CommentIcon from "@mui/icons-material/Comment";
import { fetchComment } from "../redux/reducers/comments";
const UserList = () => {
  const posts = useAppSelector((state) => state.postReducer);
  const users = useAppSelector((state) => state.userReducer);
  const comments = useAppSelector((state) => state.commentReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchComment());
  }, []);
  const { id } = useParams();
  const userId = Number(id);
  const userShow = users.find((user) => user.id === userId);
  const madeBy = users.find((user) => user.id === userId);
  const otherPosts = posts.filter(
    (postItem) => postItem?.userId === madeBy!.id
  );
  const otherPostsId = otherPosts.find((post) => post.id);

  const commentsShow = comments.filter(
    (comment) => comment.postId === otherPostsId.id
  );
  const showPost = (id:number) => {
    navigate(`/posts/${id}`)
  }
  return (
    <>
    <div className="users">
    <ul className="user container">
       
       <li className="user-title">{userShow!.name}</li>
       <div className="user-body">
        <li>{userShow!.email}</li> 
       <li className="user-item__phone">{userShow!.phone}</li>
       <li className="user-item__website">{userShow!.website}</li>
     
       <div className="user-posts">
       {otherPosts.length} posts
      </div>
     </div>
   </ul>
    </div>

      <div className="postOne__comments container">
        Other posts made by {madeBy!.name}
      </div>
      <div className="posts container">
        {otherPosts.map((other) => (
          <div onClick={() => showPost(other.id)} className=" post ">
            <div className="post-item">
              <div className="post-item__title">{other.title}</div>
              <div className="post-item__body">{other.body}</div>
              <div className="post-item__madeby">
                By {madeBy ? madeBy.name : ""} <CommentIcon color="primary" />{" "}
                {commentsShow.length}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserList;
