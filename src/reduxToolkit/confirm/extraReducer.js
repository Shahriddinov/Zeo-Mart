import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "../../services/api/axios";
import { CONFIRM } from '../../services/api/utils';

// Define the API endpoint for sending SMS
export const requestSMSCode = createAsyncThunk(
  'confirm/requestSMSCode',
  async ({ otp, phoneNumber }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        CONFIRM,
        { code: otp, phone: phoneNumber },
        {
          headers: {
            'X-APP-UID': '5e730e8e0b852a417aa49ceb',
            'Content-Type': 'application/json', // Use 'application/json' for JSON payload
          },
        }
      );

      if (response.status === 200) {
        // Save phone number to localStorage upon successful response
       
        return response.status; // Return successful response status
      } else {
        throw new Error('Failed to confirm user'); // Throw an error for non-200 status
      }
    } catch (error) {
      // Use rejectWithValue to dispatch the error message to Redux state
      return rejectWithValue('Failed to confirm user: ' + error.message);
    }
  }
);
