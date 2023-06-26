import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setNum } from '../actions';

const InformationPage = () => {
    const dispatch = useDispatch();

  const name = useSelector((state) => state.name);
  const age = useSelector((state) => state.age);
  const num = useSelector((state) => state.num)
  const numbers = useSelector((state) => state.numbers);

  return (
    <div>
      <h2>Information</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
            <button onClick={()=>dispatch(setNum(num+age))}>Add</button>
      <h1>{num}</h1>
    </div>
  );
};

export default InformationPage;
