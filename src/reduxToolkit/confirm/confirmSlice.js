import { createSlice } from '@reduxjs/toolkit';
import { requestSMSCode } from './extraReducer'; // Assuming you import the correct async thunk

const initialState = {
  loading: false,
  error: null,
  verificationStatus: null,
  verifyCode: null,
  smsRequestTime: null,
  token: null,
};

const confirmSlice = createSlice({
  name: 'auth', // Rename to 'auth' for clarity
  initialState,
  reducers: {
    updateSMSRequestTime(state) {
      state.smsRequestTime = Date.now();
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestSMSCode.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(requestSMSCode.fulfilled, (state, action) => {
        state.loading = false;
        state.verificationStatus = 'succeeded';
        state.verifyCode = action.payload; // Assuming action.payload contains verification code
        state.smsRequestTime = Date.now(); // Update SMS request time upon success
      })
      .addCase(requestSMSCode.rejected, (state, action) => {
        state.loading = false;
        state.verificationStatus = 'failed';
        state.error = action.error.message || 'Failed to request SMS code'; // Display custom error message if available
      });
  },
});

// Export action creators and reducer
export const { updateSMSRequestTime, setToken } = confirmSlice.actions;
export default confirmSlice.reducer;
