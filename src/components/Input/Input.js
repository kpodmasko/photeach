import React, { useState, useEffect } from 'react';
import './Input.css';

function Input({ onChange, value: valueProp }) {
  const [inputValue, setInputValue] = useState(valueProp);

  function handleChange(event) {
    const { value } = event.target;

    setInputValue(value);
    onChange(value);
  }

  useEffect(
    function() {
      setInputValue(valueProp);
    },
    [valueProp]
  );

  return (
    <input
      className="input input--focus"
      onChange={handleChange}
      value={inputValue}
    />
  );
}

export default Input;
