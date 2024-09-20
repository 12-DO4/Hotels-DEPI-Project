import { createSlice } from "@reduxjs/toolkit";
import { fetchTravels, fetchTravelDetails } from "../APIs/travelsApi";

export const travelsSlice = createSlice({
  name: "travelsData",

  initialState: {
    travels: [],
    travel: {
      title: "",
      description: "",
      duration: "",
      price: 0,
      availableSeats: 0,
    },
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchTravels.fulfilled, (state, actions) => {
        state.travels = actions.payload;
      })
      .addCase(fetchTravelDetails.fulfilled, (state, actions) => {
        state.travel = actions.payload;
      });
  },
});

export default travelsSlice.reducer;
