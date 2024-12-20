'use client';

import { useEffect, useState } from 'react';

export function ScrollBehavior({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky top-0 z-40 ${isScrolled ? 'bg-opacity-40 backdrop-blur-md' : ''}`}>
      {children}
    </div>
  );
}

