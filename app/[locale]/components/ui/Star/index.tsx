"use client"
import React, { useRef, useEffect, useState } from 'react';

interface Star10PointsProps {
  color?: string;
  children: React.ReactNode;
  className?: string;
}

const Star10Points: React.FC<Star10PointsProps> = ({ color = 'bg-yellow-400', children, className = '' }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      if (contentRef.current) {
        const contentSize = Math.max(
          contentRef.current.scrollWidth,
          contentRef.current.scrollHeight
        );
        setSize(contentSize * 1.2); // Add 20% to ensure content fits
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [children]);

  return (
    <div className={`relative ${className}`} style={{ maxHeight: '50vh' }}>
      <div
        className="mx-auto"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          maxWidth: '100%',
          maxHeight: '50vh',
        }}
      >
        <div
          className={`absolute inset-0 ${color}`}
          style={{
            clipPath: 'polygon(50% 0%, 60.9% 35.3%, 98.1% 35.3%, 68.5% 57.1%, 79.4% 92.3%, 50% 70.6%, 20.6% 92.3%, 31.5% 57.1%, 1.9% 35.3%, 39.1% 35.3%)',
          }}
        ></div>
        <div
          className={`absolute inset-0 ${color}`}
          style={{
            clipPath: 'polygon(50% 0%, 60.9% 35.3%, 98.1% 35.3%, 68.5% 57.1%, 79.4% 92.3%, 50% 70.6%, 20.6% 92.3%, 31.5% 57.1%, 1.9% 35.3%, 39.1% 35.3%)',
            transform: 'rotate(36deg)',
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div ref={contentRef} className="w-4/5 h-4/5 overflow-auto text-center flex items-center justify-center p-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Star10Points;

