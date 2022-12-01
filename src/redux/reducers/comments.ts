import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Comment } from "../../types/comment";

const initialState: Comment[] = []
export const fetchComment = createAsyncThunk("comment", async (id:number) => {
  const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  const data = result.data;
  console.log(data);
  
  return data;
});


const comments = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchComment.fulfilled, (state,action) => {
      return action.payload;
    })
    ;
  },
});

const commentReducer = comments.reducer

export default commentReducer;