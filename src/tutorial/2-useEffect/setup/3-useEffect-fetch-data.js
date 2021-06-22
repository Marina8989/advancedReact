import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUser = async() => {
     const response = await fetch(url);
     const users = await response.json();

     setUsers(users);
  }

  useEffect(() => {
     getUser();
  },[])

  return (
    <>
      <h3>github users</h3>
       <ul className="users">
         {users.map(user => {
           const {id, login, avatar_url, html_url} = user
           return (
             <li key={id}>
                <img src={avatar_url} logo={login}/>
               <div>
                <h3>{login}</h3>
                <p>{html_url}</p>
               </div>  
             </li>
           )
         })}
       </ul>
     </>  
    )
};

export default UseEffectFetchData;
