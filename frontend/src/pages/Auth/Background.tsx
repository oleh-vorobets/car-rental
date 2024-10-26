import loginCarImage from '../../assets/images/login-car.jpeg';

interface IBackground {
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const Background: React.FC<IBackground> = ({ children, footer }) => {
  return (
    <>
      <div className="h-screen w-screen bg-neutral-200 flex justify-center items-center">
        <div className="bg-slate-50 bg-slate-600 p-10 rounded-[4rem] w-10/12 h-5/6 flex gap-4">
          <div className="basis-2/5 bg-green-500 p-4">40% Width Content</div>
          <div className="basis-3/5">
            <img
              src={loginCarImage}
              alt="Login Car"
              className="w-full h-full object-cover rounded-[4rem]"></img>
          </div>
          {/* {children} */}
        </div>
      </div>
      {footer && <div></div>}
    </>
  );
};

//TODO: Add footer

export default Background;
