import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSmallScreen: null,
  isMdScreen: null
};

export const calculateScreenSize = () => (dispatch) => {
  const isSmallScreen = window.innerWidth < 768;
  const isMdScreen = window.innerWidth < 878;
  
  if (isSmallScreen){
    dispatch(setIsSmallScreen(true));

  } else{
    dispatch(setIsSmallScreen(false));
  }
  if (isMdScreen){
    dispatch(setisMdScreen(true));

  } else{
    dispatch(setisMdScreen(false));
  }
  
};

const screenSizeSlice = createSlice({
  name: 'screenSize',
  initialState,
  reducers: {
    setIsSmallScreen(state, action) {
      state.isSmallScreen = action.payload;
    },
    setisMdScreen(state, action) {
      state.isMdScreen = action.payload;
    },
  },
});

export const { setIsSmallScreen, setisMdScreen } = screenSizeSlice.actions;
export default screenSizeSlice.reducer;
