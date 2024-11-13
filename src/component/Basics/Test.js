import React, { useState } from 'react';
import "./style.css";

const Test = () => {

    const [count, setCount] = useState(0);
  
    return (
      <>
            <div className="container"></div>
            <button onClick={() => setCount(count + 1)}>
            </button>
            <h1 className='pluscount'>{count}</h1>
            <button onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))}>
            </button>
            <div/>
      </>
    );
}

export default Test
