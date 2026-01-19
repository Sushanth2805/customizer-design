import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-500 text-white hover:bg-brand-600 shadow-soft shadow-brand-400/50 hover:shadow-brand-500/40 hover:-translate-y-0.5",
    secondary: "bg-brand-50 text-brand-600 hover:bg-brand-100 border border-brand-100",
    outline: "border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 bg-white",
    ghost: "text-gray-600 hover:text-brand-500 hover:bg-brand-50/50",
    white: "bg-white text-brand-600 hover:bg-gray-50 shadow-md hover:shadow-lg border border-transparent"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};