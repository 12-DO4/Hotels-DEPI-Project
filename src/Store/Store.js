import { configureStore } from "@reduxjs/toolkit";
import travelsSlice from "../reducers/travelsSlice";
import postsSlice from "../reducers/postsSlice";

const store = configureStore({
    reducer: {
        travelsData: travelsSlice,
        postsData: postsSlice,
    }
});

export default store;