interface IExternalLoginIcon {
  src: string;
  className?: string;
  href: string;
  role?: string;
}

const ExternalLoginIcon: React.FC<IExternalLoginIcon> = ({
  src,
  className,
  href,
  role = 'button'
}) => {
  return (
    <a
      className="cursor-pointer rounded-full focus:outline-none focus:ring-4 focus:ring-slate-400 focus:ring-offset-2 focus:ring-opacity-60"
      href={href}
      role={role}>
      <img
        src={src}
        className={`w-12 h-12 rounded-full transition duration-300 ease-in-out hover:scale-105 ${className}`}></img>
    </a>
  );
};

export default ExternalLoginIcon;
