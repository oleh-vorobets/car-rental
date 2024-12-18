import React from 'react';

interface IButton {
  children: React.ReactNode;
  className?: string;

  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<IButton> = ({
  children,
  className,
  disabled,
  onClick,
  type
}) => {
  const baseStyles =
    'bg-black text-white font-roboto text-xl font-medium rounded-full p-4 tracking-wider transition duration-300 ease-in-out transform hover:scale-105 shadow-sm focus:outline-none focus:ring-4 focus:ring-slate-400 focus:ring-opacity-60 focus:ring-offset-1';
  const disabledStyles = 'opacity-50 cursor-not-allowed';
  const combinedStyles = `${baseStyles} ${
    disabled ? disabledStyles : 'hover:border-slate-300'
  } ${className}`;

  return (
    <button
      className={combinedStyles}
      onClick={onClick}
      disabled={disabled}
      type={type}>
      {children}
    </button>
  );
};

export default Button;
