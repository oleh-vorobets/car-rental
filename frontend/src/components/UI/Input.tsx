import React from 'react';

interface IInput {
  placeholder?: string;
  svg?: React.ReactNode;
  type: string;
}

const Input: React.FC<IInput> = ({ placeholder, svg, type }) => {
  return (
    <div className="w-full min-w-[200px]">
      <div className="relative">
        <input
          type={type}
          className="w-full pl-20 font-roboto font-medium pr-5 py-3 bg-back-main placeholder:text-gray-400 placeholder:text-xl placeholder:font-roboto placeholder:tracking-wide text-gray-900 text-xl border border-slate-200 rounded-full transition duration-300 ease focus:outline-none focus:ring-slate-400 focus:ring-2 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder={placeholder}
        />

        {svg && (
          <span className="absolute w-7 h-7 top-3 left-10 text-gray-500">
            {svg}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
