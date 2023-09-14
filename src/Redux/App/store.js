
// create redux store

import authReducer from "../Features/auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";

const createStore = configureStore({
  reducer: {
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) =>  getDefaultMiddleware(),
  devTools : true
});

// export store
export default createStore;