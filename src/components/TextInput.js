import React from 'react';

function TextInput({ label, value, ...props }) {
  return (
    <label htmlFor={label} className="mt-6 text-lg">
      {label}
      <input
        id={label}
        name={label}
        type="text"
        value={value}
        className="block border rounded-sm"
        {...props}
      />
    </label>
  );
}

export default TextInput;
