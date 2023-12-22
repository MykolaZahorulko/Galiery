import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './PageLoadAnimation.module.scss';

const PageLoadAnimation = ({ children }) => {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setIsActive(true);
    window.scrollTo(0, 0);

    const timeoutId = setTimeout(() => {
      setIsActive(false);
    }, 1010);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return <div className={`${styles.fadeIn} ${isActive ? styles._active : ''}`}>{children}</div>;
};

export default PageLoadAnimation;