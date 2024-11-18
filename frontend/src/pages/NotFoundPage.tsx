import React from 'react';
import LinkButton from '../components/UI/LinkButton';

const NotFoundPage: React.FC = () => {
  return (
    <div className="w-screen h-screen bg-back-main flex items-center justify-center flex-col gap-6">
      <h1 className="text-9xl font-extrabold">Oops!</h1>
      <h2 className="uppercase text-4xl font-medium">404 - page not found</h2>
      <span className="text-xl font-medium w-6/12 text-center">
        The page you are looking for might have been removed had it's name
        changed or is temporarily unavaliable.
      </span>
      <LinkButton className="uppercase" to="/login">
        Go to home page
      </LinkButton>
    </div>
  );
};

export default NotFoundPage;
