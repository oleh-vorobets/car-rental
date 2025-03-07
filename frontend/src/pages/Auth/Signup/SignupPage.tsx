import Background from '../../../components/Layout/Background';
import signupCarImage from '../../../assets/images/signup-car.jpeg';
import { useEffect, useState } from 'react';
import Button from '../../../components/UI/Button';
import Input from '../../../components/UI/Input';
import { Form, Link } from 'react-router-dom';
import PasswordSvg from '../../../assets/svgs/PasswordSvg';
import EmailSvg from '../../../assets/svgs/EmailSvg';
import HR from '../../../components/UI/HR';
import ExternalLoginIcon from '../../../components/UI/ExternalLoginIcon';
import googleIcon from '../../../assets/icons/google.png';
import facebookIcon from '../../../assets/icons/facebook.png';
import linkedinIcon from '../../../assets/icons/linkedin.png';
import IdentificationSvg from '../../../assets/svgs/IdentificationSvg';
import UserSvg from '../../../assets/svgs/UserSvg';
import { useAuth } from '../../../hooks/useAuth';
import { useTitle } from '../../../hooks/useTitle';
import { urls } from '../../../constants/urls';
import { isPasswordStrong } from '../../../utils/isPasswordStrong';
import ErrorMessage from '../../../components/UI/ErrorMessage';
import toast from 'react-hot-toast';

interface IError {
  isError: boolean;
  message: string;
}
const SignupPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState<IError>({
    isError: false,
    message: ''
  });
  const { signupMutation, isSignupError, isSignupPending } = useAuth();
  useTitle('Signup - Get the car of your dream!');

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    setError({
      isError: false,
      message: ''
    });
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
    setError({
      isError: false,
      message: ''
    });
  }

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const credentials = { email, password, firstName, lastName };
    const isPasswordStrongEnough = isPasswordStrong(password);
    if (isPasswordStrongEnough) {
      signupMutation(credentials);
    } else {
      setError({
        isError: true,
        message: "The password isn't strong enough!"
      });
      toast.error(
        'Password should contain 8 characters, including uppercase and lowercase letters, as well as a number',
        { duration: 8000 }
      );
    }
  }

  useEffect(() => {
    if (isSignupError)
      setError({
        isError: true,
        message: 'Account with such email already registered!'
      });
  }, [isSignupError]);

  return (
    <Background
      image={signupCarImage}
      contentStyles="pt-8 pb-16 xl:pt-8 xl:px-8">
      <div className={`${isSignupError ? 'mb-6' : 'mb-10'}`}>
        <h1 className="font-oswald text-7xl font-semibold mb-2 max-[400px]:text-6xl">
          Welcome
        </h1>
        <p className="text-gray-400 text-base font-medium tracking-wide ">
          We are glad to see you back{' '}
          <br className="hidden max-[400px]:block"></br> with us
        </p>
      </div>
      <Form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 relative mb-6">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Input
            placeholder="First name"
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            svg={UserSvg}
          />
          <Input
            placeholder="Last name"
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            svg={IdentificationSvg}
          />
        </div>
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          svg={EmailSvg}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          svg={PasswordSvg}
        />
        {error.isError && <ErrorMessage>{error.message}</ErrorMessage>}

        <Button className="mt-6" type="submit" disabled={isSignupPending}>
          Sign up now!
        </Button>
      </Form>
      <HR containerClassName="mb-4">Or sign up with</HR>
      <div className="flex flex-row gap-14 items-center justify-center max-[360px]:gap-10">
        <ExternalLoginIcon src={googleIcon} href="#" />
        <ExternalLoginIcon src={facebookIcon} href="#" />
        <ExternalLoginIcon src={linkedinIcon} href="#" />
      </div>
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 sm:bottom-0">
        <span className="block min-w-max">
          <span className="text-gray-500 text-lg w-max">
            Already have an account?{' '}
          </span>
          <Link
            to={urls.login}
            className="text-gray-400 hover:text-gray-500 transition-all ease-in-out duration-300 w-max border-b-[0.1rem] border-gray-400 hover:border-gray-500 text-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-60 focus:ring-offset-[3px]">
            Login
          </Link>
        </span>
      </div>
    </Background>
  );
};
export default SignupPage;
