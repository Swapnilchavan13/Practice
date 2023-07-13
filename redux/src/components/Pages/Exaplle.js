import React, { useState, useEffect, useContext, useRef } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Run code after every render
    document.title = `Count: ${count}`;
  }, [count]);

  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input element on initial render
    inputRef.current.focus();
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <input ref={inputRef} type="text" value={message} onChange={handleInputChange} />
      <p>Message: {message}</p>
    </div>
  );
};

export default ExampleComponent;
