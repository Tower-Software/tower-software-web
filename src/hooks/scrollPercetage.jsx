import { useState, useEffect } from 'react';

const useScrollPercentage = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    const newScrollPercentage = (scrollTop / (fullHeight - windowHeight)) * 100;
    setScrollPercentage(newScrollPercentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPercentage;
};

export default useScrollPercentage;