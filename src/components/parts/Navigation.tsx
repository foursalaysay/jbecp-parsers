// YourComponent.tsx
"use client"; // Declare this as a client component

import React, { useEffect, useState } from 'react';
import { MobileNavDropdown } from '../mobile-nav-dropdown';
import Header from './Header';

const Navigation = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check the width on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {!isMobile ? <Header /> : <MobileNavDropdown />}
    </div>
  );
};

export default Navigation;
