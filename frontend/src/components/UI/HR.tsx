interface IHR {
  containerClassName?: string;
  textClassName?: string;
  borderClassName?: string;
  children: React.ReactNode;
}

const HR: React.FC<IHR> = ({
  containerClassName,
  children,
  borderClassName,
  textClassName
}) => {
  return (
    <div className={`flex items-center w-full ${containerClassName}`}>
      <div
        className={`flex-grow border-t border-gray-300 ${borderClassName}`}></div>
      <span className={`px-4 text-gray-500 ${textClassName}`}>{children}</span>
      <div
        className={`flex-grow border-t border-gray-300 ${borderClassName}`}></div>
    </div>
  );
};

export default HR;
