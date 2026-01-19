import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Button } from './ui/Button';

const FAQItem = ({ question, answer, isOpen, onClick }: any) => {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-brand-500' : 'text-gray-900 group-hover:text-brand-500'}`}>
          {question}
        </span>
        <span className={`ml-6 flex-shrink-0 transition-transform duration-300 w-8 h-8 flex items-center justify-center rounded-full ${isOpen ? 'rotate-180 bg-brand-50 text-brand-500' : 'bg-gray-50 text-gray-400'}`}>
           {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <div 
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-600 leading-relaxed pr-8">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I install Customizer on my Shopify store?",
      a: "Simply visit the Shopify App Store, search for 'Customizer', and click 'Add App'. Follow the installation prompts, and you'll be ready to enable order editing on your store in minutes."
    },
    {
      q: "What can customers edit with Customizer?",
      a: "Customers can edit shipping addresses, change quantities, remove items, add new products to an existing order, and even cancel orders within the time window you configure."
    },
    {
      q: "Can I control which orders are editable by customers?",
      a: "Yes, you have full control. You can set time limits (e.g., editable for 1 hour after purchase) and exclude specific products or order tags from being edited."
    },
    {
      q: "Does Customizer integrate with third-party apps?",
      a: "We integrate seamlessly with most popular fulfillment services, ERPs, and marketing tools in the Shopify ecosystem."
    },
    {
      q: "Is there a free trial available?",
      a: "Yes! We offer a 14-day free trial on all plans so you can see the impact on your support tickets before paying a dime."
    }
  ];

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
             <span className="text-brand-500 font-bold text-xs tracking-widest uppercase mb-3 block">Support</span>
             <h2 className="text-3xl font-extrabold text-brand-900 mb-6">Frequently Asked Questions</h2>
             <p className="text-gray-600 mb-8 text-lg">Everything you need to know about the product and billing.</p>
             <Button variant="outline" className="w-full sm:w-auto">Contact Support</Button>
          </div>
          
          <div className="lg:w-2/3">
             <div className="bg-white rounded-[2rem] p-8 shadow-card border border-gray-100">
               {faqs.map((faq, index) => (
                 <FAQItem 
                   key={index} 
                   question={faq.q} 
                   answer={faq.a} 
                   isOpen={openIndex === index}
                   onClick={() => setOpenIndex(openIndex === index ? null : index)}
                 />
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};