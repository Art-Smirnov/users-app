import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UsersPosts from './pages/UsersPosts';
import Users from './pages/Users';
import UsersAlbums from './pages/UsersAlbums';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Users />,
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
