import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllPostsAPI
} from "./sampleAPI";

const initialState = {
  status: "idle",
  posts: [],
  post: {},
  notification: null,
};

export const getAllPosts = createAsyncThunk(
  "sample/getPosts",
  async () => {
    const response = await getAllPosts();
    return response;
  }
);


export const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    // sync reducers

  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.status = "idle";
        state.posts = action.payload;
        state.notification = "All Posts loaded";
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.status = "error";
        state.notification = action.payload;
      });
    }
});

export const selectPosts = (state) => state.sample.posts;
export const selectPost = (state) => state.sample.post;
export default parcelSlice.reducer;
