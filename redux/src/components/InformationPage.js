import React from 'react';
import { useSelector } from 'react-redux';

const InformationPage = () => {
  const name = useSelector((state) => state.name);
  const age = useSelector((state) => state.age);
  const numbers = useSelector((state) => state.numbers);

  return (
    <div>
      <h2>Information</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default InformationPage;
