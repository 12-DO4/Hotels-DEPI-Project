import { configureStore } from "@reduxjs/toolkit";
import travelsSlice from "../reducers/travelsSlice";

const store = configureStore({
    reducer: {
        travelsData: travelsSlice,
    }
});

export default store;