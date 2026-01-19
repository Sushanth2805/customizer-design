import React from 'react';
import { Button } from './ui/Button';
import { CheckCircle } from 'lucide-react';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-brand-500 to-brand-400 rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-400/30">
          
          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-left max-w-xl">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">Start Simplifying Your Order Management Today!</h2>
                <p className="text-brand-100 mb-10 text-lg">Reduce support tickets, boost sales, and enhance customer satisfaction immediately with our 14-day free trial.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="white" size="lg" className="text-brand-600 font-bold">Install Customizer</Button>
                  <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white">Read Documentation</Button>
                </div>
            </div>

            {/* Visual element on the right */}
            <div className="hidden md:block bg-white text-gray-900 rounded-2xl p-6 w-72 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
               <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <span className="font-bold text-sm">Edit Order</span>
                  <div className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold">ACTIVE</div>
               </div>
               <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                     <CheckCircle size={16} className="text-brand-500" />
                     <span>Phone and Shipping Address</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                     <CheckCircle size={16} className="text-brand-500" />
                     <span>Change Quantities</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                     <CheckCircle size={16} className="text-brand-500" />
                     <span>Delete Items</span>
                  </div>
               </div>
               <div className="mt-4 pt-3 border-t border-gray-100">
                  <div className="h-2 w-1/3 bg-gray-100 rounded-full"></div>
               </div>
            </div>
          </div>

          {/* Background circles */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-white opacity-10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 bg-brand-600 opacity-20 rounded-full blur-[80px] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};