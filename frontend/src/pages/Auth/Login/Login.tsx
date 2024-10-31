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
import { useState } from 'react';
import ErrorMessage from '../../../components/UI/ErrorMessage';
import EmailSvg from '../../../assets/svgs/EmailSvg';
import PasswordSvg from '../../../assets/svgs/PasswordSvg';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  return (
    <Background image={loginCarImage}>
      <div className={`${isError ? 'mb-6' : 'mb-10'}`}>
        <h1 className="font-oswald text-7xl font-semibold mb-2 max-[400px]:text-6xl">
          Welcome
        </h1>
        <p className="text-gray-400 text-base font-medium tracking-wide ">
          We are glad to see you back{' '}
          <br className="hidden max-[400px]:block"></br> with us
        </p>
      </div>
      {isError && <ErrorMessage>Invalid email or password!</ErrorMessage>}
      <div className="flex flex-col gap-5 relative mb-6">
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          svg={EmailSvg}
        />
        <div className="flex flex-col gap-2 items-end">
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            svg={PasswordSvg}
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
        <ExternalLoginIcon src={googleIcon} href="#" />
        <ExternalLoginIcon src={facebookIcon} href="#" />
        <ExternalLoginIcon src={linkedinIcon} href="#" />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <span className="block min-w-max">
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
