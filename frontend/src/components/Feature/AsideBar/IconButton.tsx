import React from 'react';

interface IIconButton {
  children: () => JSX.Element;
  className?: string;
  isActive?: boolean;
  borderColor?: string;
  textColor?: string;
  hoverBgColor?: string;
}

const IconButton: React.FC<IIconButton> = ({
  children,
  className,
  isActive = false
}) => {
  return (
    <div
      className={`w-16 h-16 rounded-2xl border-[2px] border-secondary-light flex justify-center items-center hover:bg-btn-primary hover:rounded-[20px] transition-all duration-300 ease-in-out hover:text-white cursor-pointer ${
        isActive && 'bg-btn-primary text-white'
      } ${className}`}>
      {children()}
    </div>
  );
};

export default IconButton;
