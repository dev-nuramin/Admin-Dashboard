// create user registar slice

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userRegisterSlice = createAsyncThunk(
  "auth/userRegisterSlice",
  async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/auth/registar",
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
