import { configureStore } from "@reduxjs/toolkit";

import ScreenSizeReducer from "./features/ScreenSize/ScreenSizeSlice.jsx";
import authReducer from "./features/auth/authSlice.jsx";


export const store = configureStore({
  reducer: {
    screenSize: ScreenSizeReducer,
    auth: authReducer,


   
  },
});
