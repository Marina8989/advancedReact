import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Ben',
    age: 24,
    message: 'Random Message'
  })

  const handleClick = () => {
    setPerson({...person, message: 'New Message'})
  }
  return (
      <div>
        <h2>{person.name}</h2>
        <h4>{person.age}</h4>
        <h4>{person.message}</h4>
        <button type="button" className="btn" onClick={handleClick}>Change Message</button>
      </div>
    )
};

export default UseStateObject;
