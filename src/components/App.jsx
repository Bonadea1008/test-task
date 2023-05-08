import SharedLayout from './SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('../Pages/HomePage'));
const TweetsPage = lazy(() => import('../Pages/TweetsPage'));

export const App = () => {
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<HomePage />} />
      <Route path="tweets" element={<TweetsPage />} />
    </Route>
  </Routes>;
};
