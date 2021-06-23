import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [loading, setLoading] = useState(false);

  if(loading) {
      return 'Loading...';
  }
  return 'Multiple Choice';
};

export default MultipleReturns;
