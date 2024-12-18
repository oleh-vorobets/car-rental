import React from 'react';
import { Link } from 'react-router-dom';

interface ILinkButton {
  children: React.ReactNode;
  className?: string;

  to: string;

  onClick?: () => void;
  type?: string;
}

const LinkButton: React.FC<ILinkButton> = ({
  children,
  className,
  to = '/',
  onClick,
  type
}) => {
  const styles = `bg-black text-white font-roboto text-xl font-medium rounded-full p-4 tracking-wider transition duration-300 ease-in-out transform hover:scale-105 shadow-sm focus:outline-none focus:ring-4 focus:ring-slate-400 focus:ring-opacity-60 focus:ring-offset-1 hover:border-slate-300 ${className}`;

  return (
    <Link className={styles} to={to} onClick={onClick} type={type}>
      {children}
    </Link>
  );
};

export default LinkButton;
