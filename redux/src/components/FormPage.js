import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setName, setAge } from '../actions';

const FormPage = () => {
  const dispatch = useDispatch();
  const [name, setNameValue] = useState('');
  const [age, setAgeValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setName(name));
    dispatch(setAge(age));
    setNameValue('');
    setAgeValue('');
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setNameValue(e.target.value)}
          />
        </label>
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
      </form>
    </div>
  );
};

export default FormPage;
