import React, { useContext } from 'react';
// import { MyContext } from '../Appcon';

function ComponentB() {
//   const value = useContext(MyContext);
const value = "hello"
  return <div>Value from context: {value}</div>;
}

export default ComponentB;
