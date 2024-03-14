
import React from 'react';

const CZInput = ({value, onChange, placeholder, className}) => {
  return (
    <input
          className={`px-3 py-2 border rounded-md bg-white bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          />
  )
};
export default CZInput;