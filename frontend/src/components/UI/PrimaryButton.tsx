import React from 'react';

interface IPrimaryButton {
  children: React.ReactNode;
  className?: string;

  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: () => JSX.Element;
}

const PrimaryButton: React.FC<IPrimaryButton> = ({
  children,
  className,
  disabled,
  onClick,
  type,
  icon
}) => {
  return (
    <button
      className={`bg-btn-primary text-white font-roboto text-lg font-normal rounded-2xl py-2 px-4 tracking-wider transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-slate-400 focus:ring-opacity-60 focus:ring-offset-1 flex flex-row gap-2 items-center ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}>
      {icon && <span>{icon()}</span>}
      {children}
    </button>
  );
};

export default PrimaryButton;
