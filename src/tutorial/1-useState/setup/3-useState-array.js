import React, {useState} from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [person, setPerson] = useState(data)
  console.log(person);
  return (
    <div>
      {person.map(item => {
        const {id, name} = item;
        return (
          <div key={id} className='item'>
            <h2>{name}</h2>
          </div>
        )
      })}
      <button className="btn" type="button" onClick={() => setPerson([])}>Clear Item</button>
    </div>
  )
};

export default UseStateArray;
