import React, { useContext } from 'react';
// import { MyContext } from './MyContext';

function ComponentA() {
  // const value = useContext(MyContext);
  const value = "hello"

  return <div>Value from context: {value}</div>;
}

export default ComponentA;
