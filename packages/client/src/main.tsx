import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Login from './routes/Login';
import Register from './routes/Register';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
