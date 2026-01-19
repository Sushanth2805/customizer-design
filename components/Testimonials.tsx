import React from 'react';
import { Star } from 'lucide-react';

const ReviewCard = ({ name, role, text, delay }: { name: string, role: string, text: string, delay: string }) => (
  <div className="bg-white p-8 rounded-3xl shadow-card border border-gray-100 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
    <div className="flex text-yellow-400 mb-6 space-x-1">
      {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={18} fill="currentColor" strokeWidth={0} />)}
    </div>
    <p className="text-gray-600 flex-1 mb-8 leading-relaxed text-base italic">"{text}"</p>
    <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
      <div className="w-12 h-12 bg-gray-100 rounded-full overflow-hidden">
        {/* Abstract Avatar */}
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
      </div>
      <div>
        <h4 className="font-bold text-brand-900">{name}</h4>
        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{role}</p>
      </div>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-brand-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-900 mb-6">People can't stop talking about Customizer</h2>
          <p className="text-gray-600 text-lg">See how Customizer is transforming order management for businesses just like yours.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ReviewCard 
            name="Sarah J." 
            role="Fashion Boutique" 
            text="Turn every message into money. With a chat solution that handles unlimited conversations using ultra-personalized, high-converting responses."
            delay="0"
          />
          <ReviewCard 
            name="Michael Chen" 
            role="TechGadgets" 
            text="We reduced our support ticket volume by 40% in the first week. The customers love the ability to fix their own mistakes without waiting."
            delay="100"
          />
          <ReviewCard 
            name="Emma W." 
            role="Operations Manager" 
            text="The 'Add Product' feature is a game changer. We've seen a significant bump in AOV since installing Customizer."
            delay="200"
          />
        </div>
      </div>
    </section>
  );
};