import React from 'react';
import { Button } from './ui/Button';

// Mockup 1: Customer Support Chat
const ChatMockup = () => (
  <div className="relative w-full h-48 flex flex-col justify-center px-6 py-4">
    {/* Floating White Card Container */}
    <div className="bg-white rounded-2xl shadow-card p-4 w-full max-w-[280px] mx-auto transform -rotate-2 hover:rotate-0 transition-transform duration-500">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4 border-b border-gray-50 pb-2">
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
        </div>
        
        {/* Messages */}
        <div className="space-y-3">
            <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-100 flex-shrink-0 overflow-hidden border border-gray-100">
                     <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
                </div>
                <div className="bg-gray-100 rounded-2xl rounded-tl-none px-3 py-2 text-[10px] text-gray-600 font-medium leading-tight max-w-[80%]">
                    Hey, Thank you for the order editing feature.
                </div>
            </div>
            <div className="flex items-end gap-2 flex-row-reverse">
                <div className="w-6 h-6 rounded-full bg-brand-100 flex-shrink-0 overflow-hidden border border-brand-200">
                     <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" alt="avatar" />
                </div>
                {/* Red Bubble per design */}
                <div className="bg-brand-500 rounded-2xl rounded-tr-none px-3 py-2 text-[10px] text-white font-medium leading-tight shadow-md shadow-brand-200 max-w-[80%]">
                    You made it easier, thx!
                </div>
            </div>
        </div>
    </div>
  </div>
);

// Mockup 2: Checkout Card
const CheckoutMockup = () => (
  <div className="relative w-full h-48 flex items-center justify-center px-4">
     <div className="bg-white rounded-2xl shadow-card p-5 w-full max-w-[260px] transform hover:scale-105 transition-transform duration-500 border border-gray-50">
        <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center text-lg">👕</div>
            <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-gray-900 truncate">Plain Black T-Shirt</div>
                <div className="text-[10px] text-gray-500">Size: M</div>
                <div className="text-[10px] text-gray-500">Color: Black</div>
            </div>
            <div className="text-xs font-bold text-gray-900">$30</div>
        </div>
        {/* Red Checkout Button per design */}
        <div className="w-full bg-brand-500 text-white text-center py-2.5 rounded-lg text-[10px] font-bold shadow-lg shadow-brand-200 hover:bg-brand-600 transition-colors cursor-pointer">
            Checkout now
        </div>
        
        {/* Handwriting annotation */}
        <div className="absolute -bottom-6 -right-2 hidden md:block opacity-60">
             <div className="text-[10px] font-handwriting text-brand-500 transform -rotate-6">Easy!</div>
        </div>
     </div>
  </div>
);

// Mockup 3: Add Product List
const AddProductMockup = () => (
  <div className="relative w-full h-48 flex items-center justify-center px-4">
     <div className="bg-white rounded-2xl shadow-card p-4 w-full max-w-[280px] overflow-hidden border border-gray-50">
         <div className="flex justify-between items-center mb-4 border-b border-gray-50 pb-2">
             <div className="h-2 w-16 bg-gray-100 rounded"></div>
             <div className="flex items-center gap-1 px-2 py-1 bg-white border border-gray-200 shadow-sm rounded-md">
                <span className="text-[10px] font-bold text-gray-700">+ Add Product</span>
             </div>
         </div>
         <div className="space-y-2">
             {[1, 2].map((i) => (
                 <div key={i} className="flex items-center gap-3 p-2 bg-gray-50/50 rounded-lg">
                     <div className="w-8 h-8 bg-gray-100 rounded-md flex-shrink-0"></div>
                     <div className="flex-1">
                         <div className="h-1.5 w-16 bg-gray-200 rounded mb-1"></div>
                         <div className="h-1.5 w-8 bg-gray-100 rounded"></div>
                     </div>
                     <div className="w-5 h-5 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 text-xs">
                        +
                     </div>
                 </div>
             ))}
         </div>
     </div>
  </div>
);

const BenefitCard = ({ title, description, Mockup }: any) => (
  <div className="bg-brand-50 rounded-[2.5rem] p-8 md:p-10 hover:-translate-y-2 transition-transform duration-500 border border-brand-100/50 flex flex-col h-full relative overflow-hidden group">
    {/* Soft gradient blob in background */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-100/40 transition-colors"></div>
    
    <div className="relative z-10 mb-8 flex-1 flex items-center justify-center">
        <Mockup />
    </div>
    
    <div className="relative z-10 mt-auto text-left">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">
        {description}
        </p>
    </div>
  </div>
);

export const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="max-w-2xl">
                <span className="text-xs font-bold text-gray-900 mb-3 block uppercase tracking-wider">Benefits</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.1]">
                Boost Sales and Simplify <br/> 
                <span className="text-brand-500">Order Management</span>
                </h2>
            </div>
            <div className="flex-shrink-0">
                <Button className="bg-brand-500 hover:bg-brand-600 text-white shadow-soft shadow-brand-500/30">
                    Install Customizer
                </Button>
            </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard 
            title="Lower Support Tickets"
            description="Let customers easily edit orders themselves, reducing your support workload and resulting in faster response times."
            Mockup={ChatMockup}
          />
          <BenefitCard 
            title="Less Cart Abandonment"
            description="Improve customer experience by letting them fix order mistakes, reducing cancellations, and keeping sales on track."
            Mockup={CheckoutMockup}
          />
          <BenefitCard 
            title="Add products to an Order"
            description="Increase average order value by allowing customers to add forgotten items to their existing order effortlessly."
            Mockup={AddProductMockup}
          />
        </div>
      </div>
    </section>
  );
};