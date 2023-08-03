import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [percentage, setPercentage] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(prevPercentage => {
        const newPercentage = prevPercentage + 10;
        if (newPercentage >= 100) {
          setCompleted(true);
          clearInterval(interval);
          return 100;
        }
        return newPercentage;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader">
      {completed ? (
        <div className="download-complete">Download Complete</div>
      ) : (
        <div className="loader-progress" style={{ width: `${percentage}%` }}>
          {percentage}%
        </div>
      )}
    </div>
  );
};

export default Loader;
