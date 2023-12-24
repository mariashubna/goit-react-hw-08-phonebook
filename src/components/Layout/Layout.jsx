import React from 'react';
import { Header } from '../Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';


 const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout