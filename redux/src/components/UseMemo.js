import React, { useMemo, useState } from 'react';

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);

  const expensiveValue = useMemo(() => {
    // Simulate an expensive calculation
    console.log('Calculating...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ExpensiveComponent;
