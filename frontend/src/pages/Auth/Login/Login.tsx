import Button from '../../../components/UI/Button';
import Input from '../../../components/UI/Input';
import Background from '../Background';
import loginCarImage from '../../../assets/images/login-car.jpeg';
import { Link } from 'react-router-dom';
import googleIcon from '../../../assets/icons/google.png';
import facebookIcon from '../../../assets/icons/facebook.png';
import linkedinIcon from '../../../assets/icons/linkedin.png';
import ExternalLoginIcon from '../../../components/UI/ExternalLoginIcon';
import HR from '../../../components/UI/HR';

const Login: React.FC = () => {
  return (
    <Background footer={<div>Footer Content</div>} image={loginCarImage}>
      <div className="mb-10">
        <h1 className="font-oswald text-7xl font-semibold mb-3 max-[400px]:text-6xl">
          Welcome
        </h1>
        <p className="text-gray-400 text-base font-medium tracking-wide ">
          We are glad to see you back{' '}
          <br className="hidden max-[400px]:block"></br> with us
        </p>
      </div>
      <div className="flex flex-col gap-5 relative mb-6">
        <Input
          placeholder="Email"
          type="email"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          }
        />
        <div className="flex flex-col gap-2 items-end">
          <Input
            placeholder="Password"
            type="password"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            }
          />
          <Link
            to="/forgot-password"
            className="text-gray-400 hover:text-gray-500 transition-all ease-in-out duration-300 text-lg w-fit focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-60 focus:ring-offset-[3px] rounded-sm">
            Forgot password?
          </Link>
        </div>
        <Button className="mt-6">Get Started</Button>
      </div>
      <HR containerClassName="mb-4">Or sign in with</HR>
      <div className="flex flex-row gap-14 items-center justify-center max-[360px]:gap-10">
        <ExternalLoginIcon src={googleIcon} />
        <ExternalLoginIcon src={facebookIcon} />
        <ExternalLoginIcon src={linkedinIcon} />
      </div>
      <div className="flex flex-col gap-4 absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <span className="flex flex-col justify-center items-center 2xl:block">
          <span className="text-gray-500 text-lg w-max">
            Don't have an account?{' '}
          </span>
          <Link
            to="/signup"
            className="text-gray-400 hover:text-gray-500 transition-all ease-in-out duration-300 w-max border-b-[0.1rem] border-gray-400 hover:border-gray-500 text-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-60 focus:ring-offset-[3px]">
            Sign Up
          </Link>
        </span>
      </div>
    </Background>
  );
};

export default Login;
