import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Post } from "../../types/posts";

const initialState: Post[] = []
export const fetchPosts = createAsyncThunk("posts", async () => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const data = result.data;
  return data;
});
export const createPostFetch = createAsyncThunk("postCreate", async(data:Post)=> {
  const result = await axios.post(`https://jsonplaceholder.typicode.com/posts`, data);
  const newData = result.data;
  console.log(newData);
  
  return newData;
})

const posts = createSlice({
  name: "post",
  initialState,
  reducers: {
    createPost : (state, action) => {
      return [...state, action.payload]
    }
  },
  extraReducers: (build) => {
    build.addCase(fetchPosts.fulfilled, (state,action) => {
      return action.payload;
    })
    build.addCase(createPostFetch.fulfilled, (state,action) => {
      return state;
    })


  },
});

const postReducer = posts.reducer

export const { createPost } = posts.actions;
export default postReducer;