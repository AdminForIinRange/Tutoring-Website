import { configureStore } from "@reduxjs/toolkit";

import ScreenSizeReducer from "./features/Screen/ScreenSizeSlice.jsx";


export const store = configureStore({
  reducer: {
    screenSize: ScreenSizeReducer,




   
  },
});
