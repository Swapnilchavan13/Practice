import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import RegistrationPage from './Component/Register';
import LoginPage from './Component/Login';
import Product from './Component/Product';
import { PrivateRoute } from './Component/PrivateRoute';

const App = () => {
  const token = localStorage.getItem('token');

  const logout =()=>{
    localStorage.setItem('token', false);
  } 
   return (
    <>
      <div>
        <Link to="/">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/product">Product</Link>
        {token ? <button onClick={logout}>Logout</button> : ""}
      </div>
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product" element={<PrivateRoute> <Product /> </PrivateRoute>}></Route>
      </Routes>
    </>
  );
};

export default App;
