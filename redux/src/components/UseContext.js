import React, { createContext, useContext, useState } from 'react';
import ComponentA from './CompnentA';
import ComponentB from './ComponetB';


// Create a context
const MyContext = createContext();

function Appcon() {
  const [value, setValue] = useState('Hello, world!');

  return (
    <MyContext.Provider value={value}>
      <ComponentA />
      <ComponentB />
    </MyContext.Provider>
  );
}

export default Appcon;
