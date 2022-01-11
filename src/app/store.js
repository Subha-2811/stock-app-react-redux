import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

//Configuring Store
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
