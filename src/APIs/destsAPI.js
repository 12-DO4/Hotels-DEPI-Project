import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = '/data.json';

export const fetchDests = createAsyncThunk("dests/fetchDests", async () => {
    const response = await axios.get(URL);
    return response.data["destinations"];
});

export const fetchTours = createAsyncThunk("dests/fetchTours", async () => {
    const response = await axios.get(URL);
    return response.data["tours"];
});
