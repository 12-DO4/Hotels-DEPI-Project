import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchTravels = createAsyncThunk("travels/fetchTravels", async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/travel`);
    return response.data;
});

export const fetchTravelDetails = createAsyncThunk("travels/fetchTravelDetails", async (id) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/travel/${id}`);
    return response.data;
});
