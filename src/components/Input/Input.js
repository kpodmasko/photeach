import React, { useState, useEffect, useRef } from 'react';
import { useAutoFocus } from '../../hooks';
import './Input.css';

function Input({ onChange, value: valueProp }) {
  const [inputValue, setInputValue] = useState(valueProp);
  const inputRef = useRef(null);
  useAutoFocus(inputRef);

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
      ref={inputRef}
      className="input input--focus"
      onChange={handleChange}
      value={inputValue}
    />
  );
}

export default Input;
