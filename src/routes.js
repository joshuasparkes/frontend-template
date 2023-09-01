import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import Pricing from './pages/pricing';
import Dashboard from './pages/dashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
