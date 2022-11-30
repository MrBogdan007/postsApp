import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Post } from "../../types/posts";

const initialState: Post[] = []
export const fetchPosts = createAsyncThunk("users", async () => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const data = result.data;
  return data;
});


const posts = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchPosts.fulfilled, (state,action) => {
      return action.payload;
    })
    ;
  },
});

const postReducer = posts.reducer

export default postReducer;