import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="glass-nav rounded-full shadow-lg shadow-gray-200/20 px-6 py-3 w-full max-w-5xl flex items-center justify-between transition-all duration-300">
        <div className="flex items-center">
          <a href="#" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center text-white shadow-md shadow-brand-200">
              <ShoppingBag size={16} strokeWidth={3} />
            </div>
            <span className="font-bold text-lg tracking-tight text-gray-900">Customizer</span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-600 hover:text-brand-500 font-medium text-sm transition-colors">Home</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-brand-500 font-medium text-sm transition-colors">How It Works</a>
          <a href="#features" className="text-gray-600 hover:text-brand-500 font-medium text-sm transition-colors">Features</a>
          <a href="#faq" className="text-gray-600 hover:text-brand-500 font-medium text-sm transition-colors">FAQ</a>
        </div>

        <div className="hidden md:flex items-center space-x-3">
          <a href="#" className="text-gray-900 font-semibold text-sm hover:text-brand-500 transition-colors px-3">Login</a>
          <Button size="sm" className="shadow-none">Install Customizer</Button>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 flex flex-col space-y-4 md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <a href="#home" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium py-2 hover:text-brand-500">Home</a>
          <a href="#how-it-works" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium py-2 hover:text-brand-500">How It Works</a>
          <a href="#features" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium py-2 hover:text-brand-500">Features</a>
          <div className="pt-2 border-t border-gray-100 flex flex-col gap-3">
             <a href="#" className="text-gray-900 font-semibold py-2">Login</a>
             <Button className="w-full">Install Customizer</Button>
          </div>
        </div>
      )}
    </header>
  );
};