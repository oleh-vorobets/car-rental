import React from 'react';

interface IButton {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<IButton> = ({ children, className }) => {
  return (
    <button
      className={`bg-black text-white font-roboto text-xl font-medium rounded-full p-4 tracking-wider	transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow ${className}`}>
      {children}
    </button>
  );
};

export default Button;
