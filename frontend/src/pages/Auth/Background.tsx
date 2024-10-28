interface IBackground {
  children: React.ReactNode;
  footer?: React.ReactNode;
  image: string;
}

const Background: React.FC<IBackground> = ({ children, footer, image }) => {
  return (
    <>
      <div className="min-h-screen w-screen bg-back-white flex justify-center items-center sm:bg-back-main">
        <div className="bg-white p-6 rounded-0 w-full h-[750px] flex gap-4 m-0 justify-center sm:rounded-[4rem] sm:w-11/12 sm:m-10 max-[400px]:p-0">
          <div className="basis-2/5 px-8 py-16 xl:p-16 flex flex-col relative max-[1100px]:basis-3/4 max-[560px]:w-full max-[560px]:basis-full max-[560px]:px-0">
            {children}
          </div>
          <div className="basis-3/5 overflow-hidden rounded-[3.2rem] max-[1100px]:hidden max-[1100px]:basis-0">
            <img
              src={image}
              alt="Login Car"
              className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110 "></img>
          </div>
        </div>
      </div>
      {footer && <div></div>}
    </>
  );
};

//TODO: Add footer

export default Background;
