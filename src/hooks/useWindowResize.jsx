import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setWindowWidth} from "../actions/windowWidthActions.js";

const useWindowResize = () => {
  const dispatch = useDispatch();
  const windowWidth = useSelector((state) => state.windowWidth);

  let resizeTimer;

  const handleResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      dispatch(setWindowWidth(window.innerWidth));
    }, 200);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  return windowWidth;
};

export default useWindowResize;