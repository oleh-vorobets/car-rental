import React from 'react';

interface IIconButton {
  children: () => JSX.Element;
  className?: string;
}

const IconButton: React.FC<IIconButton> = ({ children, className }) => {
  return (
    <div
      className={`w-16 h-16 rounded-2xl border-[2px] border-secondary-light flex justify-center items-center hover:bg-btn-primary hover:rounded-[20px] transition-all duration-300 ease-in-out hover:text-white cursor-pointer ${className}`}>
      {children()}
    </div>
  );
};

export default IconButton;
