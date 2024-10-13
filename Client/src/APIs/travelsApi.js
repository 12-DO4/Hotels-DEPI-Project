import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = '/data.json';

export const fetchTravels = createAsyncThunk("travels/fetchTravels", async () => {
    const response = await axios.get(URL);
    return response.data["travels"];
});

export const fetchTravelDetails = createAsyncThunk("travels/fetchTravelDetails", async (id) => {
    const response = await axios.get(URL);
    return response.data["travelDetails"][id];
});
