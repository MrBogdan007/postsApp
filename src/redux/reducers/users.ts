import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../types/users";

const initialState: User[] = []

export const fetchUsers = createAsyncThunk("users", async () => {
   const result = await axios.get("https://jsonplaceholder.typicode.com/users");
   const data = result.data;
   return data;
 });

const users = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchUsers.fulfilled, (state,action) => {
      return action.payload;
    })
    ;
  },
});

const userReducer = users.reducer

export default userReducer;