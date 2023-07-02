import React from 'react';
import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FormPage from './components/FormPage';
import InformationPage from './components/InformationPage';
import store from './store';
import Timer from './components/UseRef';
import ExpensiveComponent from './components/UseMemo';
import ParentComponent from './components/UseContext';
import Appcon from './components/UseContext';


const App = () => {
  return (
    <Provider store={store}>
      <Appcon />
      <FormPage />
      <InformationPage />
      <Timer />
      <ExpensiveComponent />
      <ParentComponent />
    </Provider>
  );
};

export default App;
