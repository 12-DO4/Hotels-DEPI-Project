import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = '/data.json';

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts`);
    return response.data;
});

export const fetchPostPreview = createAsyncThunk("posts/fetchPostPreview", async (id) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts/${id}`);
    return response.data;
});
