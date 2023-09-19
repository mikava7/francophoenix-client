import React, { useState, useEffect } from "react";

const Timer = ({ initialTime }) => {
  const [count, setCount] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      // Decrease the count by 1 every second
      setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : initialTime));
    }, 1000);

    return () => {
      // Clear the timer when the component unmounts
      clearInterval(timer);
    };
  }, [initialTime]);

  return <div>{count}</div>;
};

export default Timer;
