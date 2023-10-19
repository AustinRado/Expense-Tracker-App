import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} className='text-2xl'>
          count is {count}
        </button>
      </div>
      
    </>
  )
}

export default App
