import { createSlice } from "@reduxjs/toolkit";
import {
    registerUser,
    
} from "./extraReducer";


const initialState = {
  user: null,
  loading: false,
  error: null,
  registrationStatus: 'idle',
  registrationResponse: null,
  verificationStatus: null,
  verifyCode:null,
  smsRequestTime: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      updateSMSRequestTime(state) {
        state.smsRequestTime = Date.now(); // Update the SMS request time to current timestamp
      },
    },
    extraReducers: (build) => {
       
        // build
        //     .addCase(sendEmail.pending, (state) => {
        //         state.loading = true;
        //     })
        //     .addCase(sendEmail.fulfilled, (state, action) => {
        //         state.loading = false;
        //         if (action.message) {
        //             state.message = action.message;
        //         } else {
        //             state.message = action.payload.message;
        //         }
        //     })
        //     .addCase(sendEmail.rejected, (state, action) => {
        //         state.loading = false;
        //         state.message = action.message;
        //     });



        // Verify Token
        // build
        //     .addCase(verifyToken.pending, (state) => {
        //         state.verifyLoading = true;
        //     })
        //     .addCase(verifyToken.fulfilled, (state, action) => {
        //         state.verifyLoading = false;
        //         state.tokenMessage = action.payload.message;
        //     })
        //     .addCase(verifyToken.rejected, (state, action) => {
        //         state.verifyLoading = false;
        //         state.tokenMessage = action.error.message;
        //     });

        // Set Password
        // build
        //     .addCase(setPassword.pending, (state) => {
        //         state.loginLoading = true;
        //     })
        //     .addCase(setPassword.fulfilled, (state, action) => {
        //         state.loginLoading = false;
        //         state.token = action.payload;
        //         setItem("token", action.payload.token);
        //     })
        //     .addCase(setPassword.rejected, (state, action) => {
        //         state.loginLoading = false;
        //         state.error = action.error.message;
        //     });

        // Sign In
        // build
        //     .addCase(signIn.pending, (state) => {
        //         state.loginLoading = true;
        //         state.error = null;
        //     })
        //     .addCase(signIn.fulfilled, (state, action) => {
        //         state.loginLoading = false;
        //         state.token = action.payload.token;
        //         if (action.payload.message) {
        //             state.error = action.payload.message;
        //         } else {
        //             state.userData = action.payload.profile;
        //             setItem("token", action.payload.token);
        //             setItem("user", JSON.stringify(action.payload.profile));
        //
        //             // setTimeout(() => {
        //             //   removeItem("token");
        //             //   removeItem("user");
        //             //   // state.token = null;
        //             //   // state.userData = null;
        //             //   window.location.reload(true);
        //             // }, [60000]);
        //         }
        //     })
        //     .addCase(signIn.rejected, (state, action) => {
        //         state.loginLoading = false;
        //         state.error = action.message;
        //     });

        // Reset Password
        // build
        //     .addCase(resetPassword.pending, (state) => {
        //         state.resetLoading = true;
        //         state.message = "";
        //     })
        //     .addCase(resetPassword.fulfilled, (state, action) => {
        //         state.resetLoading = false;
        //
        //         if (action.payload.errors) {
        //             state.error = action.payload.errors.email;
        //         } else {
        //             state.message = action.payload.message;
        //         }
        //     })
        //     .addCase(resetPassword.rejected, (state, action) => {
        //         state.resetLoading = false;
        //         state.error = action.error.message;
        //     });

        // Recover Password
        // build
        //     .addCase(recoverPassword.pending, (state) => {
        //         state.resetLoading = true;
        //     })
        //     .addCase(recoverPassword.fulfilled, (state, action) => {
        //         state.resetLoading = false;
        //         if (action.payload.errors) {
        //             state.error = action.payload.errors.message;
        //         } else {
        //             state.message = action.payload.message;
        //             state.success = true;
        //         }
        //     })
        //     .addCase(recoverPassword.rejected, (state, action) => {
        //         state.resetLoading = false;
        //         state.error = action.error.message;
        //     });

        // Update User
        build
        .addCase(registerUser.pending, (state) => {
          state.registrationStatus = 'loading';
          state.error = null;
          state.registrationResponse = null;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
          state.registrationStatus = 'succeeded';
          state.registrationResponse = action.payload;
          state.user = action.payload;

        })
        .addCase(registerUser.rejected, (state, action) => {
          state.registrationStatus = 'failed';
        state.error = action.error.message;
        state.registrationResponse = null;
        })

        
       
    },
  });
  
  export default authSlice.reducer;

  export const selectVerificationStatus = (state) => state.user.verificationStatus;
  
