import { createSlice } from "@reduxjs/toolkit";
import { fetchTravels, fetchTravelDetails } from "../APIs/travelsApi";

export const travelsSlice = createSlice({
  name: "travelsData",

  initialState: {
    travels: [],
    travel: {},
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
