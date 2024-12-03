import LoginPage from './pages/Auth/Login/LoginPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import SignupPage from './pages/Auth/Signup/SignupPage';
import ForgotPasswordPage from './pages/Auth/ForgotPassword/ForgotPasswordPage';
import ResetPasswordPage from './pages/Auth/ResetPassword/ResetPasswordPage';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  { path: '/signup', element: <SignupPage /> },
  { path: '/forgot-password', element: <ForgotPasswordPage /> },
  { path: '/reset-password', element: <ResetPasswordPage /> },
  {
    path: '*',
    element: <NotFoundPage />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
