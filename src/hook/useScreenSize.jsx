import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateScreenSize } from "../features/modal/ScreenSizeSlice";

const useScreenSize = () => {
  const dispatch = useDispatch();

  useEffect(() => {
 
    dispatch(calculateScreenSize());

   
    const handleResize = () => {
      dispatch(calculateScreenSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

 
  const isSmallScreen = useSelector(state => state.screenSize.isSmallScreen);
  const isMdScreen = useSelector(state => state.screenSize.isMdScreen);

  
  return { isSmallScreen, isMdScreen};
};

export default useScreenSize;
