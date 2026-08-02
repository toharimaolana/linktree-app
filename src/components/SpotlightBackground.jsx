import React, { useEffect, useState } from 'react';

const SpotlightBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#08080a]">
      {/* Precision Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60"></div>

      {/* Dynamic Cursor Spotlight Beam */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(163, 230, 53, 0.07), transparent 80%)`
        }}
      />

      {/* Secondary Ambient Accent Orbs */}
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-purple-500/10 blur-[140px] animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default SpotlightBackground;
