import Login from './pages/Auth/Login/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Signup from './pages/Auth/Signup/Signup';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  { path: '/signup', element: <Signup /> },
  {
    path: '*',
    element: <NotFound />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
