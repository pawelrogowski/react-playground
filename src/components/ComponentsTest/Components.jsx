import { useState, useEffect } from 'react';

export function Counter() {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem('count');
    return storedCount !== null ? parseInt(storedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={increment}>add 1</button>
      <button onClick={decrement}>subtract 1</button>
    </>
  );
}
