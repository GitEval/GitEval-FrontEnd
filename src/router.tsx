import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/Home',
    element: <Home />,
  }
]);
