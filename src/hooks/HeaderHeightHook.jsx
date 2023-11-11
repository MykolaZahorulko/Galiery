import { useEffect, useState } from 'react';

const useHeaderHeight = (headerClassName) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerElement = document.querySelector(`.${headerClassName}`);
      if (headerElement) {
        setHeaderHeight(headerElement.clientHeight);
      }
    };

    updateHeaderHeight();

    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, [headerClassName]);

  return headerHeight;
};

export default useHeaderHeight;
