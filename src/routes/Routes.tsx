import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Clubs from '@/pages/Clubs';
import Courses from '@/pages/Courses';
import Tournaments from '@/pages/Tournaments';
import Formats from '@/pages/Formats';
import Tiebreakings from '@/pages/Tiebreakings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: '/clubs', element: <Clubs /> },
      { path: '/courses', element: <Courses /> },
      { path: '/tournaments', element: <Tournaments /> },
      { path: '/formats', element: <Formats /> },
      { path: '/tiebreakings', element: <Tiebreakings /> },
    ],
  },
]);
