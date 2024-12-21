import React, { useEffect, useState } from 'react';
import { Form, Link, useParams } from 'react-router-dom';
import Icon from '../../../components/UI/Icon';
import Input from '../../../components/UI/Input';
import Button from '../../../components/UI/Button';
import LogoImage from '../../../assets/icons/hooli.png';
import PasswordSvg from '../../../assets/svgs/PasswordSvg';
import toast from 'react-hot-toast';
import { useAuth } from '../../../hooks/useAuth';
import { useTitle } from '../../../hooks/useTitle';
import ErrorMessage from '../../../components/UI/ErrorMessage';

const ResetPasswordPage: React.FC = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const {
    resetPasswordMutation,
    isResetPasswordPending,
    isResetPasswordError
  } = useAuth();
  useTitle('Reset password - Get the car of your dream!');

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    try {
      if (password !== confirmPassword) {
        return setIsError(true);
      }
      if (!token) {
        return toast.error(
          'There is no token. Please try again go through link!'
        );
      }

      resetPasswordMutation({ token, password });
    } catch (error: any) {
      toast.error(
        error.message || 'An unexpected error occurred. Try again later...'
      );
    }
  }

  useEffect(() => {
    if (isResetPasswordError) setIsError(true);
  }, [isResetPasswordError]);

  return (
    <div className="min-h-screen max-w-screen bg-bg-primary flex justify-center items-center">
      <div className="bg-white rounded-3xl px-24 py-16 shadow-md flex flex-col gap-4 items-center">
        <Form
          className="max-h-full flex justify-center items-center flex-col max-w-md gap-10"
          onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <div className="flex justify-center mb-8">
              <Icon image={LogoImage} />
            </div>
            <h1 className="text-3xl font-bold">Create new password</h1>
            <h3 className="text-xl font-normal">
              Please enter your new password below for your Hooli account.
            </h3>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-col gap-4">
              <Input
                className={`${
                  isError &&
                  'border-error border-2 hover:border-inherit focus:border-inherit'
                }`}
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setIsError(false);
                }}
                svg={PasswordSvg}
                autoComplete="password"
              />
              <Input
                className={`${
                  isError &&
                  'border-error border-2 hover:border-inherit focus:border-inherit'
                }`}
                placeholder="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setIsError(false);
                }}
                svg={PasswordSvg}
                autoComplete="confirm-password"
              />
              {isError && (
                <ErrorMessage>
                  Invalid email or password. Try again
                </ErrorMessage>
              )}
            </div>
            <Link
              to="/support"
              className="text-gray-400 text-lg underline underline-offset-2 hover:text-gray-500 ml-2 transition-all ease-in-out duration-300 max-w-max">
              Need support?
            </Link>
          </div>
          <Button className="w-full" disabled={isResetPasswordPending}>
            Create password
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
