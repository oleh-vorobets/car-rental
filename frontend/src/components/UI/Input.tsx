import { useState } from 'react';
import EyeSvg from '../../assets/svgs/EyeSvg';
import EyeSlashSvg from '../../assets/svgs/EyeSlashSvg';

interface IInput {
  placeholder?: string;
  svg?: React.ReactNode;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  autoComplete?: string;
}

const Input: React.FC<IInput> = ({
  placeholder,
  svg,
  type,
  value,
  onChange,
  className,
  autoComplete
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="w-full min-w-[200px]">
      <div className="relative">
        <input
          type={isVisible ? 'text' : type}
          className={`w-full pl-14 font-roboto font-medium pr-5 py-3 bg-bg-primary placeholder:text-gray-400 placeholder:text-xl placeholder:font-roboto placeholder:tracking-wide text-gray-900 text-xl border border-slate-200 rounded-full transition duration-300 ease focus:outline-none focus:ring-slate-400 focus:ring-2 hover:border-slate-300 shadow-sm focus:shadow ${className}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
        />

        {svg && (
          <span className="absolute w-7 h-7 top-3 left-6 text-gray-500">
            {svg}
          </span>
        )}

        {type === 'password' && (
          <span
            className="absolute w-7 h-7 top-4 right-4 text-gray-500 cursor-pointer"
            onClick={() => setIsVisible((prev) => !prev)}>
            {isVisible ? <EyeSvg /> : <EyeSlashSvg />}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
