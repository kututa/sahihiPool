import { useState, useEffect } from 'react';
import '../App.css';

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = 'Sahihi Pools — Home';
  }, []);

  return (
    <>
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}