import React from 'react';
import { Button } from './ui/Button';
import { ShoppingBag, ToggleRight, MousePointer2, Check, Star } from 'lucide-react';

// Step 1 UI: App Store Card
const Step1UI = () => (
    <div className="relative w-[320px] max-w-full">
        {/* Floating App Store Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 relative z-10 transform rotate-1 transition-transform hover:rotate-0 duration-500 border border-gray-50">
            {/* Shopify Logo Placeholder */}
            <div className="flex items-center gap-2 mb-6">
                <div className="w-5 h-5 bg-[#95BF47] rounded-md flex items-center justify-center text-white text-[10px] font-bold">S</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">shopify app store</div>
            </div>
            
            <div className="flex gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl shadow-lg flex items-center justify-center text-white">
                    <ShoppingBag size={28} strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Customizer</h4>
                    <div className="inline-flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded text-[10px] font-bold text-gray-600 mb-1">
                        Built for Shopify
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-gray-500">
                        <span className="font-bold text-gray-900">Pricing</span>
                        <span>Free trial available</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-gray-500 mt-1">
                         <div className="flex text-yellow-400 gap-0.5"><Star size={8} fill="currentColor"/><Star size={8} fill="currentColor"/><Star size={8} fill="currentColor"/><Star size={8} fill="currentColor"/><Star size={8} fill="currentColor"/></div>
                         <span>5.0 (120)</span>
                    </div>
                </div>
            </div>

            <div className="w-full bg-black text-white text-center py-3 rounded-xl text-xs font-bold shadow-lg hover:bg-gray-800 transition-colors cursor-pointer">
                Install
            </div>
        </div>
        
        {/* Decor elements */}
        <div className="absolute -z-10 top-8 -right-4 w-full h-full bg-white/50 rounded-2xl border border-gray-100/50 transform rotate-6"></div>
    </div>
);

// Step 2 UI: Settings List
const Step2UI = () => (
    <div className="relative w-[340px] max-w-full bg-white rounded-2xl shadow-2xl overflow-hidden transform -rotate-1 transition-transform hover:rotate-0 duration-500 border border-gray-50">
        <div className="bg-white px-6 py-4 border-b border-gray-100 flex justify-between items-center">
             <div>
                <h4 className="font-bold text-gray-900 text-sm">Edit Order</h4>
                <p className="text-[10px] text-gray-400">Customer Portal Settings</p>
             </div>
             <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
        </div>
        <div className="p-3 space-y-1">
            {[
                { label: 'Shipping Address and Details', active: true },
                { label: 'Change Quantity', active: true },
                { label: 'Delete Items', active: true },
                { label: 'Preferred Delivery Date', active: false },
                { label: 'Order Note', active: false },
            ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${item.active ? 'bg-brand-500 border-brand-500 text-white' : 'border-gray-300'}`}>
                            {item.active && <Check size={10} strokeWidth={4} />}
                        </div>
                        <span className={`text-xs font-medium ${item.active ? 'text-gray-900' : 'text-gray-400'}`}>{item.label}</span>
                    </div>
                    
                    {/* Visual Toggle */}
                    <div className={`w-7 h-4 rounded-full relative transition-colors ${item.active ? 'bg-brand-500' : 'bg-gray-200'}`}>
                        <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full shadow-sm transition-all ${item.active ? 'right-0.5' : 'left-0.5'}`}></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

// Step 3 UI: Customer Edit Modal
const Step3UI = () => (
    <div className="relative w-[320px] max-w-full">
         <div className="bg-white rounded-2xl shadow-2xl overflow-hidden relative z-10 border border-gray-50">
             <div className="p-5 border-b border-gray-100 flex justify-between items-start">
                 <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Edit Order</h4>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></div>
                        You have 29 mins to edit
                    </div>
                 </div>
                 <div className="text-gray-300 cursor-pointer hover:text-gray-500">×</div>
             </div>
             
             <div className="p-5 space-y-4">
                 <div className="flex items-center justify-between text-xs text-gray-500 pb-2 border-b border-gray-50">
                     <span>Change product / Remove items</span>
                     <Check size={12} className="text-brand-500" />
                 </div>
                 
                 <div className="flex gap-3">
                     <div className="w-14 h-14 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center text-lg border border-gray-100">👕</div>
                     <div className="flex-1">
                         <div className="font-bold text-xs text-gray-900 mb-1">Plain Black T-Shirt</div>
                         <div className="text-[10px] text-gray-500 mb-2">$30</div>
                         <div className="w-full bg-brand-500 text-white text-center py-2 rounded-lg text-[10px] font-bold shadow-md shadow-brand-200 hover:bg-brand-600 transition-colors cursor-pointer">
                             Update Order
                         </div>
                     </div>
                     <div className="flex flex-col justify-center items-center gap-1">
                         <div className="text-[10px] text-gray-400">Qty</div>
                         <div className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-xs font-bold bg-gray-50">2</div>
                     </div>
                 </div>

                 <div className="pt-2 text-center">
                     <span className="text-[10px] text-gray-400 hover:text-red-500 cursor-pointer transition-colors border-b border-transparent hover:border-red-500">Cancel Order</span>
                 </div>
             </div>
         </div>
    </div>
);

const StepCard = ({ icon: Icon, title, highlight, description, ui: UI, buttonText }: any) => {
    // Splits title to insert highlighted span correctly
    const titleParts = title.split('___'); 

    return (
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
            {/* Image Container - Always on Left */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative w-full aspect-square max-w-[450px] bg-gradient-to-br from-[#FFF0F0] to-[#FFF5F5] rounded-[3rem] flex items-center justify-center p-8 overflow-hidden group">
                     {/* Decorative blobs */}
                     <div className="absolute top-0 right-0 w-64 h-64 bg-white/60 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                     <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-100/40 blur-[60px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
                     
                     <div className="relative z-10 transition-transform duration-700 group-hover:scale-105">
                        <UI />
                     </div>
                </div>
            </div>

            {/* Text Content - Always on Right */}
            <div className="w-full lg:w-1/2 text-left space-y-6">
                <div className="w-10 h-10 rounded-xl bg-transparent flex items-center justify-start text-brand-500 mb-2">
                    <Icon size={24} strokeWidth={2.5} />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                    {titleParts[0]}
                    {highlight && <span className="text-brand-500">{highlight}</span>}
                    {titleParts[1]}
                </h3>
                
                <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
                    {description}
                </p>

                {buttonText && (
                    <div className="pt-2">
                        <Button className="bg-brand-500 hover:bg-brand-600 text-white shadow-soft shadow-brand-500/20 px-8">
                            {buttonText}
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Effortless Order Editing in <br/>
                <span className="text-brand-500">3 Simple Steps</span>
            </h2>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
            <StepCard 
                icon={ShoppingBag}
                title="Install ___ from the Shopify App Store"
                highlight="Customizer"
                description="Seamlessly integrate Customizer to enable advanced order editing features for your store."
                buttonText="Install Customizer"
                ui={Step1UI}
            />
            
            <StepCard 
                icon={ToggleRight}
                title="___ the Edit Order Section"
                highlight="Enable"
                description="Activate the order editing feature on your checkout and thank you pages for easy access."
                ui={Step2UI}
            />

            <StepCard 
                icon={MousePointer2}
                title="Let Customers ___"
                highlight="Edit Their Orders Easily"
                description="Allow customers to modify orders independently, reducing support tickets and enhancing their shopping experience."
                ui={Step3UI}
            />
        </div>
      </div>
    </section>
  );
};