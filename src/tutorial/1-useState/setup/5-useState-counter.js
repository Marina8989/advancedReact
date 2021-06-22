import React, { useState } from 'react';

const UseStateCounter = () => {
   const [count, setCount] = useState(0);

   const handleClick = (count) => {
     setCount(count)
   }

  return (
      <>
        <section>
          <h2>Counter</h2>
           <h3>{count}</h3>
           <button type="button" className="btn" onClick={() => handleClick(count - 1)}>Decrease</button>
           <button type="button" className="btn" onClick={() => handleClick(0)}>Reset</button>
           <button type="button" className="btn" onClick={() => handleClick(count + 1)}>Increase</button>
        </section>
     </>
  )
};

export default UseStateCounter;
