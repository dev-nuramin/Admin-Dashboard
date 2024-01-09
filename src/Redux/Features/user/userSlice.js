// create apiSlice

import { createSlice } from "@reduxjs/toolkit";
import {
  createPermission,
  deletePermission,
  getUserPermission,
} from "./userApiSlice";

const userSlice = createSlice({
  name: "user",
  initialState: {
    permission: null,
    role: null,
    user: null,
    message: null,
    error: null,
  },

  reducers: {
    setMessageEmpty: (state, action) => {
      (state.message = null), (state.error = null);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserPermission.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getUserPermission.fulfilled, (state, action) => {
        state.permission = action.payload;
      })
      .addCase(createPermission.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(createPermission.fulfilled, (state, action) => {
        state.permission.push(action.payload.permission),
          (state.message = action.payload.message);
      })
      .addCase(deletePermission.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deletePermission.fulfilled, (state, action) => {
        state.permission = state.permission.filter(
          (data) => data._id !== action.payload.permission._id
        );
        state.message = action.payload.message;
      });
  },
});

//selectors
export const getAllPermission = (state) => state.user;
//actions
export const { setMessageEmpty } = userSlice.actions;
//export authSlice
export default userSlice.reducer;
