import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/api/axios";

import {

    // LOGIN,
    REGISTER,
    // RESET_PASSWORD,
    // SEND_EMAIL,
    // SET_PASSWORD,
    // VERIFY_TOKEN,
} from "../../services/api/utils";




// Verify Email


// Set Password


// Login
// export const signIn = createAsyncThunk("signIn", async (payload) => {
//     return await axios
//         .post(LOGIN, payload, {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         })
//         .then((res) => res.data)
//         .catch((e) => e.response.data);
// });

// Reset Password
// export const resetPassword = createAsyncThunk(
//     "resetPassword",
//     async (payload) => {
//         return await axios
//             .post(RESET_PASSWORD, payload, {
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             })
//             .then((res) => res.data)
//             .catch((e) => e.response.data);
//     }
// );

// Recover Password
// export const recoverPassword = createAsyncThunk(
//     "recoverPassword",
//     async (payload) => {
//         return await axios
//             .post(SET_PASSWORD, payload, {
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             })
//             .then((res) => res.data);
//     }
// );

// Update User
export const registerUser = createAsyncThunk(
    "registerUser",
    async (payload) => {
        return await axios
            .post(REGISTER, payload, {
                headers: {
                    "X-APP-UID":"5e730e8e0b852a417aa49ceb",
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => res.data);
    }
);


