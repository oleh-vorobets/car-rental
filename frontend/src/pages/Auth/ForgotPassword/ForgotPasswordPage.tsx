import Icon from '../../../components/UI/Icon';
import LogoImage from '../../../assets/icons/hooli.png';
import { Form, Link } from 'react-router-dom';
import Button from '../../../components/UI/Button';
import Input from '../../../components/UI/Input';
import { useEffect, useState } from 'react';
import EmailSvg from '../../../assets/svgs/EmailSvg';
import HR from '../../../components/UI/HR';
import toast from 'react-hot-toast';
import { useAuth } from '../../../hooks/useAuth';
import { urls } from '../../../constants/urls';
import { useTitle } from '../../../hooks/useTitle';
import ErrorMessage from '../../../components/UI/ErrorMessage';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const [isError, setIsError] = useState(false);
  const {
    forgotPasswordMutation,
    isForgotPasswordError,
    isForgotPasswordPending
  } = useAuth();
  useTitle('Forgot password - Get the car of your dream!');

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    setIsChanged(true);
    setIsError(false);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    try {
      if (isChanged) {
        forgotPasswordMutation({ email });
        setIsChanged(false);
      }
    } catch (error: any) {
      toast.error(
        error.message || 'An unexpected error occurred. Try again later...'
      );
    }
  }

  useEffect(() => {
    if (isForgotPasswordError) {
      setIsError(true);
    }
  }, [isForgotPasswordError]);

  return (
    <div className="min-h-screen max-w-screen bg-bg-primary flex justify-center items-center">
      <div className="bg-white rounded-3xl px-24 py-16 shadow-md flex flex-col gap-4 items-center">
        <Form
          className="max-h-full flex justify-center items-center flex-col max-w-md gap-10"
          onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <div className="flex justify-center mb-8">
              <Icon image={LogoImage} className="w-64" />
            </div>
            <h1 className="text-3xl font-bold">Reset your password</h1>
            <h3 className="text-xl font-normal">
              Enter the email address linked to your Hooli account and we'll
              send you an email.
            </h3>
          </div>
          <div className="w-full flex flex-col gap-2">
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              svg={EmailSvg}
              autoComplete="username"
              className={`${
                isError &&
                'border-error border-2 hover:border-inherit focus:border-inherit'
              }`}
            />
            {isError && (
              <ErrorMessage>Account with such email isn't exist</ErrorMessage>
            )}
            <Link
              to={urls.support}
              className="text-gray-400 text-lg underline underline-offset-2 hover:text-gray-500 ml-2 transition-all ease-in-out duration-300 max-w-max">
              Need support?
            </Link>
          </div>
          <Button className="w-full" disabled={isForgotPasswordPending}>
            Send link
          </Button>
        </Form>
        <HR>Or</HR>
        <Link
          to={urls.login}
          className="text-gray-400 text-xl underline underline-offset-2 hover:text-gray-500 transition-all ease-in-out duration-300">
          Come back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
