import { AsyncThunkAction, AnyAction } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { createComment,deleteComment, fetchComment } from "../redux/reducers/comments";
import SinglePost from "./SinglePost";
import CommentIcon from "@mui/icons-material/Comment";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
const PostList = () => {
  const { id } = useParams();
  const postId = Number(id);
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.postReducer);
  const users = useAppSelector((state) => state.userReducer);
  const comments = useAppSelector((state) => state.commentReducer);
  
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [body,setBody] = useState('')

  const [readMoreValue, setReadMoreValue] = useState(false);
  const onePost = posts.find((onepost) => onepost.id === postId)!;
  const post = posts.find((post) => postId === post.id);
  const madeBy = users.find((user) => user.id === post?.userId);
  const otherPosts = posts.filter(
    (postItem) => postItem?.userId === madeBy!.id
  );
  let i = 1;

  const readMore = () => {
    setReadMoreValue((prev) => !prev);
  };
  useEffect(() => {
    dispatch(fetchComment());
  }, []);
  const addComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(name  !== '' && email !== '' && body !== ''){
     
      dispatch(
        createComment({
          postId: post.id,
          id: Date.now(),
          name: name,
          email: email,
          body: body
        })
      );
    }else{
      alert('inputs shouldt be empty!')
    }

  };
  const deleteCommentFunction = (id: number) => {
    dispatch(deleteComment(id));
   
  }
  const commentsShow = comments.filter((comment) => comment.postId === postId);

  return (
    <>
      <div className="postOne container">
        <div className="post-single" key={onePost.id}>
          <div className="post-single__title">{onePost.title}</div>
          <div className="post-single__body">{onePost.body}</div>
          <div className="post-single_madeby">
              By {madeBy!.name} <CommentIcon color="primary" />
          </div>
        </div>
      </div>
      <div className="postOne__comments container">
        Comments ({commentsShow.length})
      </div>
      <form className="container" onSubmit={(e) => addComment(e)}>
                  <label htmlFor="text">Comment name: </label>
                    <input style={{display: 'block'}} type="text" onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="text">Comment email: </label>
                    <input  style={{display: 'block'}} type="text" onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="text">Comment description: </label>
                    <input style={{display: 'block'}} type="text" onChange={(e) => setBody(e.target.value)}  />
                    <button type="submit">Add comment</button>
                    
                  </form>
      <div
        style={{ maxHeight: readMoreValue ? "100%" : "380px", marginTop : '20px' }}
        className="comments"
      >
        {commentsShow.length > 0
          ? commentsShow.map((comment) => {
              return (
                <div key={comment.id} className="comment container">
                  <div className="comment-item">
                    <div className="comment-item_avatar">
                      <Stack direction="row" spacing={2}>
                        <Avatar
                          alt="Cindy Baker"
                          src={require("../img/3.jpg")}
                        />
                      </Stack>
                    </div>
                    <div className="comment-item_descr">
                      <div className="comment-item__name">{comment.name}</div>
                      <div className="comment-item__email">{comment.email}</div>
                      <div className="comment-item__body">{comment.body}</div>
                      <button onClick={() => deleteCommentFunction(comment.id)}>Delete comment</button>
                    </div>
                  </div>

                </div>
              );
            })
          : "Loading..."}

        <div
          
          onClick={readMore}
          style= {{ display: commentsShow.length <= 3 ? 'none': 'block'}}
          className="readMore"
        >
          {" "}
          {readMoreValue ? "Hide" : "Read"} {commentsShow.length - 3} more comments
        </div>
      </div>

      <div className="postOne__comments container">
        Other posts made by {madeBy!.name}
      </div>
      {otherPosts.map((other) => (
        <div className="other container">
          <div className="other-title">
            {i++}. {other.title}
          </div>
          <div className="other-body">{other.body}</div>
        </div>
      ))}
      {}
    </>
  );
};

export default PostList;
