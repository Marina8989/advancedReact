import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('Random Text');

 const handleClick = () => {
   if(text === 'Random Text') {
     setText('New Text');
   }else {
     setText('Random Text');
   }
 }

  return (
     <div>
       <h2>{text}</h2>
       <button type="button" onClick={handleClick}>Click</button>
     </div>
  )
};

export default UseStateBasics;
