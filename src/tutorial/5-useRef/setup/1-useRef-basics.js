import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
       e.preventDefault();
       console.log(refContainer.current);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={refContainer}/>
      </form>
    </div>

  )
};

export default UseRefBasics;
