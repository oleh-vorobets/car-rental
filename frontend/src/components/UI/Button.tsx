import React from 'react';

interface IButton {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<IButton> = ({ children, className }) => {
  return (
    <button
      className={`bg-black text-white font-roboto text-xl font-medium rounded-full p-4 tracking-wider	transition duration-300 ease-in-out transform hover:scale-105  hover:border-slate-300 shadow-sm focus:outline-none focus:ring-4 focus:ring-slate-400 focus:ring-opacity-60 focus:ring-offset-1 ${className}`}>
      {children}
    </button>
  );
};

export default Button;
