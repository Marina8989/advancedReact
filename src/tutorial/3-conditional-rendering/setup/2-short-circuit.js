import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator


const ShortCircuit = () => {
  const [text, setText] = useState("")
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <div>
      <h2>{firstValue}</h2>
      <h3>Value: {secondValue}</h3>
    </div>

  );
};

export default ShortCircuit;
