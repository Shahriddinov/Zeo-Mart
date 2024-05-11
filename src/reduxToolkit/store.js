import { configureStore } from "@reduxjs/toolkit";


import authSlice from "./authSlice/authSlice";
import confirmSlice from "./confirm/confirmSlice"
const store = configureStore({
    reducer: {
        authSlice,
        confirmSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
