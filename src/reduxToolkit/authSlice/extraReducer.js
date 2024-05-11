import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../services/api/axios";
import {
  
    REGISTER,
} from "../../services/api/utils";






export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (payload) => {
    try {
      const { phoneNumber } = payload; // Assuming phone number is part of the payload

      const response = await axios.post(REGISTER, payload, {
        headers: {
          'X-APP-UID': '5e730e8e0b852a417aa49ceb',
          'Content-Type': 'multipart/form-data',
        },
      });

      const status = response.status;

      let responseData = null;

      if (status === 204) {
        responseData = response.data;
        localStorage.setItem('registeredPhoneNumber', phoneNumber); // Set phone number in localStorage
      }

      return { status, responseData };
    } catch (error) {
      throw new Error('Failed to register user: ' + error.message);
    }
  }
);
