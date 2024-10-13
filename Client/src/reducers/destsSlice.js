import { createSlice } from "@reduxjs/toolkit";
import { fetchDests, fetchTours } from "../APIs/destsAPI";

export const destsSlice = createSlice({
  name: "destsData",

  initialState: {
    dests: [],
    tours: []
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchDests.fulfilled, (state, actions) => {
        state.dests = actions.payload;
      })
      .addCase(fetchTours.fulfilled, (state, actions) => {
        state.tours = actions.payload;
      });
  },
});

export default destsSlice.reducer;
