import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [width, setWidth] = useState(window.innerWidth)

  const checkSize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    console.log(width);
    return () => {
       window.removeEventListener('resize', checkSize);
    }
  }, [])


  return (
    <div>
      <h2>Width of Window</h2>
      <p>{width}</p>
    </div>
  )
};

export default UseEffectBasics;
