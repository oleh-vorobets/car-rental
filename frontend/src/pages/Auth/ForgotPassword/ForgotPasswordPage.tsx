import Icon from '../../../components/UI/Icon';
import LogoImage from '../../../assets/icons/hooli.png';
import { Form, Link } from 'react-router-dom';
import Button from '../../../components/UI/Button';
import Input from '../../../components/UI/Input';
import { useState } from 'react';
import EmailSvg from '../../../assets/svgs/EmailSvg';
import HR from '../../../components/UI/HR';
import toast from 'react-hot-toast';
import { authService } from '../../../services/auth-service/AuthService';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isChanged, setIsChanged] = useState<boolean>(false);

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    setIsChanged(true);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    try {
      if (isChanged) {
        await authService.sendForgotPassword(email);
        setIsChanged(false);
      }
      toast.success('Email was sent!');
    } catch (error: any) {
      toast.error(error.message || 'An unexpected error occurred.');
    }
  }

  return (
    <div className="min-h-screen max-w-screen bg-back-main flex justify-center items-center">
      <div className="bg-white rounded-3xl px-24 py-16 shadow-md flex flex-col gap-4 items-center">
        <Form
          className="max-h-full flex justify-center items-center flex-col max-w-md gap-10"
          onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <div className="flex justify-center mb-8">
              <Icon image={LogoImage} />
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
            />
            <Link
              to="/support"
              className="text-gray-400 text-lg underline underline-offset-2 hover:text-gray-500 ml-2 transition-all ease-in-out duration-300 max-w-max">
              Need support?
            </Link>
          </div>
          <Button className="w-full">Send link</Button>
        </Form>
        <HR>Or</HR>
        <Link
          to="/login"
          className="text-gray-400 text-xl underline underline-offset-2 hover:text-gray-500 transition-all ease-in-out duration-300">
          Come back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
