interface IIcon {
  image: string;
  className?: string;
}

const Icon: React.FC<IIcon> = ({ image, className }) => {
  return (
    <div
      className={`w-64 relative overflow-hidden ${className}`}
      style={{ aspectRatio: '2 / 1' }}>
      <img
        src={image}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
};

export default Icon;
