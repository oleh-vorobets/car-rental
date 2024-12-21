import React from 'react';
import LoupeSvg from '../../../assets/svgs/LoupeSvg';

interface ISearchInput {
  placeholder: string;
  className?: string;
  onChange: (v: string) => void;
  value: string;
  containerClassName?: string;
}

const SearchInput: React.FC<ISearchInput> = ({
  value,
  placeholder,
  className,
  onChange,
  containerClassName
}) => {
  return (
    <div
      className={`relative justify-center items-center flex ${containerClassName}`}>
      <input
        onChange={(e) => onChange(e.target.value)}
        value={value}
        placeholder={placeholder}
        className={`w-full pl-12 font-medium text-lg pr-5 py-3 bg-secondary-light placeholder:text-secondary placeholder:text-medium rounded-xl transition duration-300 ease focus:outline-none focus:ring-slate-400 focus:ring-2 ${className}`}
      />
      <div className="absolute left-3 top-1/2 -translate-y-1/2">
        <LoupeSvg />
      </div>
    </div>
  );
};

export default SearchInput;
