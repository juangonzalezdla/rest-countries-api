import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/country-detail',
    element: <CountryDetail />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
