import React, { Suspense } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import RootLayout from '../layouts/RootLayout';
import HomePage from '../pages/HomePage/HomePage';
import { EPaths } from '../enums/EPaths';
import { Loader } from '../components';

const LazyMenuPage = React.lazy(() => import('../pages/MenuPage/MenuPage'));
const LazyDeliveryPage = React.lazy(
  () => import('../pages/DeliveryPage/DeliveryPage')
);
const LazyOrdersPage = React.lazy(
  () => import('../pages/OrdersPage/OrdersPage')
);
const LazyNotFoundPage = React.lazy(
  () => import('../pages/Features/NotFoundPage/NotFoundPage')
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='' element={<HomePage />} />
      <Route
        path={EPaths.menu}
        element={
          <Suspense fallback={<Loader />}>
            <LazyMenuPage />
          </Suspense>
        }
      />
      <Route
        path={EPaths.orders}
        element={
          <Suspense fallback={<Loader />}>
            <LazyOrdersPage />
          </Suspense>
        }
      />
      <Route
        path={EPaths.delivery}
        element={
          <Suspense fallback={<Loader />}>
            <LazyDeliveryPage />
          </Suspense>
        }
      />
      <Route
        path='*'
        element={
          <Suspense fallback={<Loader />}>
            <LazyNotFoundPage />
          </Suspense>
        }
      />
    </Route>
  )
);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
