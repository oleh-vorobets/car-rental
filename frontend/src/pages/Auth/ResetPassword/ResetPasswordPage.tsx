import React from 'react';
import { useParams } from 'react-router-dom';

const ResetPasswordPage: React.FC = () => {
  const { token } = useParams();
  console.log(token);
  return <></>;
};

export default ResetPasswordPage;
