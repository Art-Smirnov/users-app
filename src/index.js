import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import UsersPosts from './routes/UsersPosts';
import Home from './routes/Home';
import UsersAlbums from './routes/UsersAlbums';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: 'posts/:userId', element: <UsersPosts /> },
  { path: 'albums/:userId', element: <UsersAlbums /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
);
