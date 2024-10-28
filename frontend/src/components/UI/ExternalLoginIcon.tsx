interface IExternalLoginIcon {
  src: string;
  className?: string;
}

const ExternalLoginIcon: React.FC<IExternalLoginIcon> = ({
  src,
  className
}) => {
  return (
    <a className="cursor-pointer rounded-full">
      <img
        src={src}
        className={`w-12 h-12 rounded-full transition duration-300 ease-in-out hover:scale-105 ${className}`}></img>
    </a>
  );
};

export default ExternalLoginIcon;
