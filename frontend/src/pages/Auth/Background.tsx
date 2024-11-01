interface IBackground {
  children: React.ReactNode;
  footer?: React.ReactNode;
  image: string;
  style?: React.CSSProperties;

  contentStyles?: string;
}

const Background: React.FC<IBackground> = ({
  children,
  footer,
  image,
  style,
  contentStyles
}) => {
  return (
    <>
      <div
        className="min-h-screen max-w-screen bg-back-white flex justify-center items-center sm:bg-back-main"
        style={style}>
        <div className="bg-white p-6 rounded-0 w-full h-[750px] flex gap-4 m-0 justify-center sm:rounded-[4rem] sm:w-11/12 sm:m-10 max-[400px]:p-2">
          <div
            className={`basis-2/5 px-8 py-16 xl:p-16 flex flex-col relative max-[1100px]:basis-3/4 max-[560px]:w-full max-[560px]:basis-full max-[560px]:px-4 ${contentStyles}`}>
            {children}
          </div>
          <div className="basis-3/5 overflow-hidden rounded-[3.2rem] max-[1100px]:hidden max-[1100px]:basis-0">
            <img
              src={image}
              alt="Login Car"
              className="w-full h-full object-cover transition-all duration-500 ease-in-out hover:scale-110 "></img>
          </div>
        </div>
      </div>
      {footer && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          {footer}
        </div>
      )}
    </>
  );
};
export default Background;
