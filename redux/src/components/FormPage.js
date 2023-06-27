import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { setName, setAge, setNum } from '../actions';

const FormPage = () => {
  const dispatch = useDispatch();
  const [name, setNameValue] = useState('');
  const [age, setAgeValue] = useState('');
  const num = useSelector((state) => state.num)


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setName(name));
    dispatch(setAge(age));
    dispatch(setNum(num));

    setNameValue('');
    setAgeValue('');
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
        </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setNameValue(e.target.value)}
          />
        <br />
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAgeValue(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
        {/* <button onClick={()=>dispatch(setNum(num))}>Add</button> */}

      </form>
    </div>
  );
};

export default FormPage;