
// create apiSlice

import { createSlice } from "@reduxjs/toolkit";
import { userRegisterSlice } from "./authApiSlice";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {},
        message: null,
        error: null
    },
    reducers: {
        setMessageEmpty: (state, action) => {
           state.message = null,
           state.error = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(userRegisterSlice.rejected, (state, actions) => {
          state.error = actions.error.message
        })
    }
})

//selectors

//actions
export const {setMessageEmpty} = authSlice.actions
//export authSlice
export default authSlice.reducer