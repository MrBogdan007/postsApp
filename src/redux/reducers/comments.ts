import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Comment } from "../../types/comment";

const initialState: Comment[] = []
export const fetchComment = createAsyncThunk("comment", async () => {
  const result = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
  const data = result.data;
  
  return data;
});

const comments = createSlice({
  name: "comment",
  initialState,
  reducers: {
    createComment: (state,action) => {
      return [...state, action.payload]
    },
    deleteComment: (state,action) => {
      return state.filter((item) => item.id !== action.payload);
    }
  },
  extraReducers: (build) => {
    build.addCase(fetchComment.fulfilled, (state,action) => {
      return action.payload;
    })
    ;

    ;
  },
});

const commentReducer = comments.reducer

export const { createComment,deleteComment } = comments.actions
export default commentReducer;