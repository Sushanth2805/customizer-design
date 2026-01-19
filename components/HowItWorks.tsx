import React from 'react';
import { Button } from './ui/Button';

const Step = ({ number, title, description, imageAlign = 'right', accentColor }: any) => {
  const isRight = imageAlign === 'right';
  
  return (
    <div className={`flex flex-col ${isRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 py-16`}>
      <div className="flex-1 space-y-6 text-left">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm text-xl font-bold text-brand-900 mb-4">
           {number}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-brand-900">{title}</h3>
        <p className="text-gray-600 text-lg leading-relaxed max-w-lg">{description}</p>
        <ul className="space-y-3 pt-2">
            {[1,2,3].map(i => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-500">
                    <div className={`w-1.5 h-1.5 rounded-full ${accentColor}`}></div>
                    <span>Key feature point description goes here</span>
                </li>
            ))}
        </ul>
      </div>
      
      <div className="flex-1 w-full">
        <div className="group bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-500 relative overflow-hidden aspect-[4/3] flex items-center justify-center">
            <div className={`absolute top-0 right-0 w-64 h-64 ${accentColor} opacity-5 blur-[80px] rounded-full group-hover:opacity-10 transition-opacity`}></div>
            <div className="absolute inset-0 bg-gray-50/50"></div>
            
            {/* Mock UI */}
            <div className="relative bg-white w-3/4 aspect-[3/4] rounded-2xl shadow-lg border border-gray-100 p-4 transform group-hover:scale-105 transition-transform duration-500">
               <div className="h-4 w-1/3 bg-gray-100 rounded mb-6"></div>
               <div className="space-y-4">
                  <div className="h-20 bg-gray-50 rounded-xl border border-dashed border-gray-200"></div>
                  <div className="h-8 bg-gray-100 rounded w-full"></div>
                  <div className="h-8 bg-gray-100 rounded w-2/3"></div>
               </div>
               <div className={`absolute bottom-4 left-4 right-4 h-10 ${accentColor} opacity-20 rounded-lg`}></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <span className="text-brand-500 font-bold text-xs tracking-widest uppercase mb-3 block">Process</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-900 mb-4">Effortless Order Editing in <br/> <span className="text-brand-500">3 Simple Steps</span></h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Connector Line (Desktop) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent hidden lg:block"></div>

        <Step 
          number="01"
          title="Install Customizer"
          description="Seamlessly integrate Customizer to enable advanced order editing features for your store with just one click."
          accentColor="bg-blue-500"
          imageAlign="right"
        />
        <Step 
          number="02"
          title="Enable the Edit Section"
          description="Activate the order editing feature on your checkout and thank you pages for easy access by your customers."
          accentColor="bg-brand-500"
          imageAlign="left"
        />
        <Step 
          number="03"
          title="Automate Support"
          description="Allow customers to modify orders independently, reducing support tickets and enhancing their shopping experience instantly."
          accentColor="bg-purple-500"
          imageAlign="right"
        />
      </div>
    </section>
  );
};