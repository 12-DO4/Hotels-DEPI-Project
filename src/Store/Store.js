import { configureStore } from "@reduxjs/toolkit";
import travelsSlice from "../reducers/travelsSlice";
import postsSlice from "../reducers/postsSlice";
import destsSlice from "../reducers/destsSlice";

const store = configureStore({
    reducer: {
        travelsData: travelsSlice,
        postsData: postsSlice,
        destsData: destsSlice
    }
});

export default store;