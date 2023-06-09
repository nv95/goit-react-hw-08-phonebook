import { Suspense } from 'react';
import { AppBarLine } from './AppBarLine/AppBarLine';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 16px' }}>
      <AppBarLine />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
