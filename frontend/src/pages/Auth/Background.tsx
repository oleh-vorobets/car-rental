interface IBackground {
  children: React.ReactNode;
  footer?: React.ReactNode;
  image: string;
}

const Background: React.FC<IBackground> = ({ children, footer, image }) => {
  return (
    <>
      <div className="h-screen w-screen bg-back-main flex justify-center items-center">
        <div className="bg-white p-6 rounded-[4rem] w-11/12 h-5/6 flex gap-4">
          <div className="basis-2/5 p-16 flex flex-col relative">
            {children}
          </div>
          <div className="basis-3/5 overflow-hidden rounded-[3.2rem]">
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
