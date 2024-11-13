import React, { useState } from 'react';
import "./style.css";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";

  const ClickCounter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <>
        <div className="container">
          <button onClick={() => setCount(count + 1)}>
            <BiPlusMedical className="icon" />
          </button>
          <h1 className='pluscount'>{count}</h1>
          <button onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))}>
            <FaMinus className="icon minus_icon" />
          </button>
        </div>
       <footer/>
    </>
  );
};

export default ClickCounter;
