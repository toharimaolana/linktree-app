import React from 'react';

const Footer = () => {
  return (
    <div
      className="mt-14 pb-8 font-mono text-[11px] text-[#3F3F46] flex flex-wrap items-center gap-x-3 gap-y-1"
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1.5rem' }}
    >
      <span>@toharimaolana</span>
      <span>·</span>
      <span>Indonesia</span>
      <span>·</span>
      <span>{new Date().getFullYear()}</span>
      <span>·</span>
      <span>React 19 + Vite</span>
    </div>
  );
};

export default Footer;