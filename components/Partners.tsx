import React from 'react';

export const Partners: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs font-bold text-gray-400 mb-8 uppercase tracking-widest">Trusted by 1,000+ Shopify Merchants</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
           {/* Placeholder Logo Blocks */}
           {[1, 2, 3, 4, 5].map((i) => (
             <div key={i} className="group relative">
                <div className="h-8 w-28 bg-gray-200 rounded-md transition-all duration-300 group-hover:bg-gray-300"></div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};