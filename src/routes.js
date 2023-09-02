import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import Pricing from "./pages/pricing";
import Dashboard from "./pages/dashboard";
import App from "./App";

const AppRoutes = () => {
  // useEffect(() => {
  //   hotjar.initialize(3593529, 6);
  // }, []);

  // useEffect(() => {
  //   hotjar.initialize(3593529, 6);
  // }, [location]); // re-initialize hotjar when location changes

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
