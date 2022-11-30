import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../types/users";

const initialState: Partial<User> = {}

export const fetchUser = createAsyncThunk("user", async (id:number) => {
   const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
   const data = result.data;
   return data;
 });

const user = createSlice({
  name: "singleUser",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchUser.fulfilled, (state,action) => {
      return action.payload;
    })
    ;
  },
});

const singleUserReducer = user.reducer

export default singleUserReducer;