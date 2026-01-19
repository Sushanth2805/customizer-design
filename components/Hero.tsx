import React from 'react';
import { Button } from './ui/Button';
import { ShoppingCart, Edit3, MapPin, Package, Check, ArrowRight, Clock, Trash2, Plus } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-brand-100 via-[#FFEAE0] to-[#FFDAC7]">
      
      {/* Decorative Blur Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-brand-200/40 rounded-full blur-[120px]"></div>
         <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-white/40 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-white/50 rounded-full pl-1 pr-4 py-1 mb-8 shadow-sm ring-1 ring-brand-100">
          <span className="flex items-center justify-center px-2 py-0.5 rounded-full bg-brand-500 text-[10px] font-bold text-white uppercase tracking-wider">New</span>
          <span className="text-xs font-medium text-brand-900">Increase AOV by 30% instantly</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-brand-900 tracking-tight mb-6 max-w-5xl mx-auto leading-[1.1]">
          Reduce Support Tickets, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-400">
            Allow Customers to Edit Orders
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Empower your customers to modify their orders directly from the status page. Save time, reduce errors, and improve satisfaction.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
          <Button variant="white" size="lg" className="w-full sm:w-auto text-gray-700">View Demo Store</Button>
          <Button size="lg" className="w-full sm:w-auto flex items-center gap-2 group">
            Install Customizer
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Interactive Mockup Area */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Central Card */}
          <div className="relative bg-white rounded-[2.5rem] shadow-2xl shadow-brand-900/10 border border-white/50 p-6 md:p-10 max-w-md mx-auto z-20 transform hover:scale-[1.01] transition-transform duration-500">
            
            {/* Card Header */}
            <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-6">
              <div className="text-left">
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Order #2931</p>
                <h3 className="font-bold text-xl text-gray-900">Order Confirmed</h3>
              </div>
              <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                <Check size={20} strokeWidth={3} />
              </div>
            </div>

            {/* Product List */}
            <div className="space-y-4 mb-8">
              <div className="flex gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl">👕</div>
                <div className="text-left flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <p className="font-bold text-gray-900 truncate">Classic Black Tee</p>
                    <p className="font-bold text-gray-900">$25.00</p>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">Size: L • Color: Black</p>
                  <div className="flex items-center gap-2">
                     <span className="text-xs font-medium bg-white px-2 py-1 rounded border border-gray-200 text-gray-600">Qty: 1</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500 px-2">
                 <span>Subtotal</span>
                 <span>$25.00</span>
              </div>
            </div>

            {/* Edit Timer Action */}
            <div className="bg-brand-50 rounded-2xl p-4 text-center border border-brand-100 relative overflow-hidden group cursor-pointer hover:bg-brand-100/50 transition-colors">
              <div className="relative z-10">
                 <p className="text-brand-600 font-bold text-sm mb-1 flex items-center justify-center gap-2">
                   <Edit3 size={14} /> Edit Your Order
                 </p>
                 <p className="text-gray-500 text-xs flex items-center justify-center gap-1">
                   <Clock size={10} />
                   Time remaining: <span className="font-bold text-brand-500 tabular-nums">29:45</span>
                 </p>
              </div>
            </div>
          </div>

          {/* Floating UI Elements (Left) */}
          <div className="absolute top-[10%] left-[5%] md:left-0 lg:-left-8 z-30 animate-float hidden md:block">
            <div className="bg-white rounded-2xl p-4 shadow-float border border-gray-100 w-64">
              <div className="flex items-center gap-3 mb-3 border-b border-gray-50 pb-2">
                 <div className="p-2 bg-blue-50 text-blue-500 rounded-lg"><MapPin size={16} /></div>
                 <div>
                   <p className="text-xs font-bold text-gray-900">Update Address</p>
                   <p className="text-[10px] text-gray-400">Shipping Details</p>
                 </div>
              </div>
              <div className="space-y-2 opacity-60">
                <div className="h-2 w-3/4 bg-gray-100 rounded-full"></div>
                <div className="h-2 w-1/2 bg-gray-100 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[20%] left-[10%] md:-left-4 z-10 hidden md:block" style={{animationDelay: '1s'}}>
             <div className="bg-white rounded-2xl p-3 shadow-float border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-red-50 text-red-500 rounded-xl flex items-center justify-center">
                   <Trash2 size={18} />
                </div>
                <div className="pr-4">
                   <p className="text-xs font-bold text-gray-900">Remove Items</p>
                   <p className="text-[10px] text-gray-400">Self-service</p>
                </div>
             </div>
          </div>


          {/* Floating UI Elements (Right) */}
          <div className="absolute top-[20%] right-[5%] md:right-0 lg:-right-12 z-20 animate-float" style={{animationDelay: '0.5s'}}>
            <div className="bg-white rounded-2xl p-4 shadow-float border border-gray-100 w-56">
               <div className="flex justify-between items-center mb-2">
                  <p className="text-xs font-bold text-gray-900">Change Quantity</p>
                  <span className="text-[10px] bg-brand-100 text-brand-600 px-1.5 py-0.5 rounded font-bold">UPDATED</span>
               </div>
               <div className="flex items-center justify-between bg-gray-50 rounded-lg p-1">
                  <button className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-gray-600">-</button>
                  <span className="text-sm font-bold text-gray-900">2</span>
                  <button className="w-6 h-6 flex items-center justify-center bg-brand-500 text-white rounded shadow-sm">+</button>
               </div>
            </div>
          </div>

          <div className="absolute bottom-[10%] right-[10%] md:-right-8 z-30 hidden md:block" style={{animationDelay: '1.5s'}}>
             <div className="bg-white rounded-2xl p-3 shadow-float border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 text-green-500 rounded-xl flex items-center justify-center">
                   <Plus size={18} />
                </div>
                <div className="pr-4">
                   <p className="text-xs font-bold text-gray-900">Add Product</p>
                   <p className="text-[10px] text-gray-400">Increase AOV</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};