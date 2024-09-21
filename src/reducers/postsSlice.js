import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, fetchPostPreview } from "../APIs/postsAPI";

export const postsSlice = createSlice({
  name: "postsData",

  initialState: {
    posts: [],
    post: {
      date: "",
      comments: 0,
      title: "",
      description: ""
    },
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, actions) => {
        state.posts = actions.payload;
      })
      .addCase(fetchPostPreview.fulfilled, (state, actions) => {
        state.post = actions.payload;
      });
  },
});

export default postsSlice.reducer;
