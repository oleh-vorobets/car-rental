import LoginPage from './pages/Auth/Login/LoginPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import SignupPage from './pages/Auth/Signup/SignupPage';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  { path: '/signup', element: <SignupPage /> },
  {
    path: '*',
    element: <NotFoundPage />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
