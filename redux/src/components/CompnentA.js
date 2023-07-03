import React, { useContext, useState } from 'react';
// import { MyContext } from './MyContext';

function ComponentA() {
  // const value = useContext(MyContext);
  const value = "hello"
    const [data, setData] = useState([]);


  fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data=> setData(data))

  return (
<>
{data.map((data) => (
<h1>{data.title}</h1>
))}
<div>Value from context: {value}</div>;
</>
  )
}

export default ComponentA;
