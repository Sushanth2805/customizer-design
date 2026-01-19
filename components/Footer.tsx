import React from 'react';
import { ShoppingBag, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Button } from './ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-50 pt-24 pb-12 border-t border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
               <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center text-white shadow-md">
                 <ShoppingBag size={18} strokeWidth={3} />
               </div>
               <span className="font-bold text-xl tracking-tight text-gray-900">Customizer</span>
            </div>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Manage Orders Smarter with Customizer. Hundreds of Shopify stores already reducing support tickets.
            </p>
            <div className="flex space-x-4">
               <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-400 hover:text-brand-500 hover:shadow-sm transition-all"><Twitter size={16}/></a>
               <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-400 hover:text-brand-500 hover:shadow-sm transition-all"><Facebook size={16}/></a>
               <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-400 hover:text-brand-500 hover:shadow-sm transition-all"><Instagram size={16}/></a>
            </div>
          </div>

          <div>
             <h4 className="font-bold text-gray-900 mb-6">Product</h4>
             <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-brand-500 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-brand-500 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-brand-500 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-brand-500 transition-colors">Changelog</a></li>
             </ul>
          </div>

           <div>
             <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
             <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-brand-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-brand-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-brand-500 transition-colors">Cookie Policy</a></li>
             </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
             <h4 className="font-bold text-gray-900 mb-6">Subscribe to newsletter</h4>
             <div className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-400 bg-white shadow-sm"
                />
                <Button size="md" className="w-full">Subscribe</Button>
             </div>
          </div>
        </div>

        <div className="border-t border-brand-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
           <p>© 2024 Customizer App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};