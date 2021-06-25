import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(true)


  return (
    <div>
      <button className="btn" onClick={() => setShow(!show)}>Show</button>
      <h2>{show ? <Text /> : ""}</h2>
    </div>
  )
};

const Text = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  }
useEffect(() => {
   window.addEventListener('resize', checkSize)
   return ()=> {
     window.removeEventListener('resize', checkSize)
   }
}, [])

  return (
    <div>
      <h2>Width:</h2>
      <p>{size}</p>
    </div>
  )
}

export default ShowHide;
