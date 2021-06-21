import React, {useState} from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [person, setPerson] = useState(data)
  console.log(person);

  const removeItem = (id) => {
      let per = person.filter( person => person.id !== id);
      setPerson(per);
  }
  return (
    <div>
      {person.map(item => {
        const {id, name} = item;
        return (
          <div key={id} className='item'>
            <h2>{name}</h2>
            <button type="button" className="btn" onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      <button className="btn" type="button" onClick={() => setPerson([])}>Clear Item</button>
    </div>
  )
};

export default UseStateArray;
