import LoginPage from './pages/Auth/Login/LoginPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import SignupPage from './pages/Auth/Signup/SignupPage';
import ForgotPasswordPage from './pages/Auth/ForgotPassword/ForgotPasswordPage';
import ResetPasswordPage from './pages/Auth/ResetPassword/ResetPasswordPage';
import { urls } from './constants/urls';

const router = createBrowserRouter([
  {
    path: urls.login,
    element: <LoginPage />
  },
  { path: urls.signup, element: <SignupPage /> },
  { path: urls.forgotPassword, element: <ForgotPasswordPage /> },
  { path: urls.resetPassword, element: <ResetPasswordPage /> },
  {
    path: '*',
    element: <NotFoundPage />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
