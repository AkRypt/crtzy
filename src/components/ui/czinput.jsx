
import React from 'react';

const CZInput = ({value, onChange, placeholder, className, id, text}) => {
  return (
    <input
          className={`px-3 py-2 border rounded-md bg-white bg-input text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
          type={text || "text"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          id={id}
          />
  )
};
export default CZInput;