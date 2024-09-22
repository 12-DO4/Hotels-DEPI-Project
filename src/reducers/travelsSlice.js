import { createSlice } from "@reduxjs/toolkit";
import { fetchTravels, fetchTravelDetails } from "../APIs/travelsAPI";

export const travelsSlice = createSlice({
  name: "travelsData",

  initialState: {
    travels: [],
    travel: {
      title: "",
      price: {
        current: 0,
        discount: 0
      },
      location: {
        place: "",
        zip: "",
        country: "",
        link: ""
      },
      rating: {
        rate: 0,
        review: 0
      },
      description: "",
      duration: "",
      maxGuests: 0,
      availableSeats: 0,
      img: "",
      type: ""
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
