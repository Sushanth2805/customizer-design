import React from 'react';

const Logo = ({ width = 100 }: { width?: number }) => (
  <svg width={width} height="30" viewBox="0 0 100 30" fill="currentColor" className="text-gray-300 hover:text-gray-400 transition-colors duration-300">
    <rect x="0" y="5" width="20" height="20" rx="5" fill="currentColor" />
    <path d="M30 15H90" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.5" />
  </svg>
);

export const Partners: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-sm font-semibold text-gray-900 mb-10 tracking-wide">Our trusted partners</h3>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80">
           <Logo width={110} />
           <Logo width={90} />
           <Logo width={120} />
           <Logo width={100} />
           <Logo width={110} />
        </div>
      </div>
    </section>
  );
};