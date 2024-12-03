import React from 'react';
import LinkButton from '../components/UI/LinkButton';

const ErrorPage: React.FC = () => {
  return (
    <div className="w-screen h-screen bg-back-main flex items-center justify-center flex-col gap-6">
      <h1 className="text-9xl font-extrabold">Oops!</h1>
      <h2 className="uppercase text-4xl font-medium">Something went wrong!</h2>
      <span className="text-xl font-medium w-6/12 text-center">
        We're sorry, but something went wrong. Please try again later or return
        to the home page.
      </span>
      <LinkButton className="uppercase" to="/">
        Go to home page
      </LinkButton>
    </div>
  );
};

export default ErrorPage;
