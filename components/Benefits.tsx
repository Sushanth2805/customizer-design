import React from 'react';
import { MessageSquare, ShoppingBag, PlusCircle, ArrowRight } from 'lucide-react';

const FeatureCard = ({ title, description, icon: Icon, colorClass, iconColor }: any) => (
  <div className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
    {/* Hover Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="relative z-10">
      <div className={`w-14 h-14 ${colorClass} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={28} className={iconColor} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold text-brand-900 mb-3">{title}</h3>
      <p className="text-gray-500 leading-relaxed mb-6">
        {description}
      </p>
      <a href="#" className="inline-flex items-center text-sm font-semibold text-brand-500 hover:text-brand-600 transition-colors">
        Learn more <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  </div>
);

export const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50/50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="text-brand-500 font-bold text-xs tracking-widest uppercase mb-2 block">Key Benefits</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-900 leading-tight">
              Boost Sales and Simplify <br/> Order Management
            </h2>
          </div>
          <button className="hidden md:flex items-center justify-center px-6 py-3 bg-white border border-gray-200 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors shadow-sm">
            View all features
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Lower Support Tickets"
            description="Let customers easily edit orders themselves, reducing your support workload and resulting in faster response times."
            icon={MessageSquare}
            colorClass="bg-blue-50"
            iconColor="text-blue-500"
          />
          <FeatureCard 
            title="Less Cart Abandonment"
            description="Improve customer experience by letting them fix order mistakes, reducing cancellations, and keeping sales."
            icon={ShoppingBag}
            colorClass="bg-brand-50"
            iconColor="text-brand-500"
          />
          <FeatureCard 
            title="Add Products to Order"
            description="Increase average order value by allowing customers to add forgotten items to their existing order effortlessly."
            icon={PlusCircle}
            colorClass="bg-green-50"
            iconColor="text-green-500"
          />
        </div>
      </div>
    </section>
  );
};