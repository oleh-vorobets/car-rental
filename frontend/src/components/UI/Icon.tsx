interface IIcon {
  image: string;
  className?: string;
  onClick?: () => void;
}

const Icon: React.FC<IIcon> = ({ image, className, onClick }) => {
  return (
    <div
      className={`w-64 relative overflow-hidden ${className}`}
      style={{ aspectRatio: '2 / 1' }}
      onClick={onClick}>
      <img
        src={image}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
};

export default Icon;
