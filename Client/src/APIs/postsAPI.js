import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = '/data.json';

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await axios.get(URL);
    return response.data["posts"];
});

export const fetchPostPreview = createAsyncThunk("posts/fetchPostPreview", async (id) => {
    const response = await axios.get(URL);
    return response.data["postPreview"][id];
});
