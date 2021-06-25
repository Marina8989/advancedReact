import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    fetch(url)
     .then((resp) => resp.json())
     .then((user) => {
       const {name} = user
       setUser(name);
       setIsLoading(false);
     })
     .catch((error) => console.log(error))
  }, [])



   if(isLoading) {
      return (
        <h2>Loading...</h2>
      )
   }
  if(isError) {
      return (
        <h2>Error...</h2>
      )
  }
  return (
    <div>
      <h2>{user}</h2>
    </div>
  )
};

export default MultipleReturns;
