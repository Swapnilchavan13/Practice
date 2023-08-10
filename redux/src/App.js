import React from 'react';
import RegistrationPage from './Component/Register';
import LoginPage from './Component/Login';
import { Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
     <Routes>  
    <Route exact path='/' element={< RegistrationPage />}></Route>  
    <Route exact path='/login' element={< LoginPage/>}></Route>  
    </Routes>  
    </>
   
  );
};

export default App;
