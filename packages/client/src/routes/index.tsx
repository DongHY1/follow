import { Suspense, lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import LoadingPage from '../components/LoadingPage';
import Layout from '../components/Layout';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
const Loadable =
  (Component: React.ComponentType<any>) => (props: JSX.IntrinsicAttributes) =>
    (
      <Suspense fallback={<LoadingPage />}>
        <Component {...props} />
      </Suspense>
    );

const RegisterPage = Loadable(lazy(() => import('../pages/RegisterPage')));

const authRoutes: RouteObject = {
  path: '*',
  children: [
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'register',
      element: <RegisterPage />,
    },
  ],
};

const normalRoutes: RouteObject = {
  path: '*',
  element: <Layout />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    // {
    //   path: 'profile',
    //   element: <RequireUser allowedRoles={['user']} />,
    //   children: [{ path: '', element: <ProfilePage /> }],
    // },
    {
      path: 'profile',
      element: <ProfilePage />,
    },
  ],
};

const routes: RouteObject[] = [authRoutes, normalRoutes];

export default routes;
