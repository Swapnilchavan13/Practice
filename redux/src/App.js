import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FormPage from './components/FormPage';
import InformationPage from './components/InformationPage';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <FormPage />
      <InformationPage />
    </Provider>
  );
};

export default App;
