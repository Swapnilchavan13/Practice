// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegistrationPage from './Component/Register';
import LoginPage from './Component/Login';
import PrivateRoute from './Component/PrivateRoute';
import Product from './Component/Product';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <PrivateRoute path="/product" element={<Product />} />
    </Routes>
  );
};

export default App;
