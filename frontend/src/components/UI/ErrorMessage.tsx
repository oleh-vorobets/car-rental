interface IErrorMessage {
  children: string;
  className?: string;
}

const ErrorMessage: React.FC<IErrorMessage> = ({ children, className }) => {
  return (
    <span className={`text-base text-error ml-2 ${className}`}>{children}</span>
  );
};

export default ErrorMessage;
