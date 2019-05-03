import React, { useState } from 'react';

function useTextInput(label, defaultState) {
  const [textValue, setTextValue] = useState(defaultState || '');

  const TextInput = () => {
    console.log(`${label} - rendered`);
    return (
      <label htmlFor={label} className="pb-4">
        {label}
        <input
          id={label}
          name={label}
          type="text"
          value={textValue}
          onChange={e => setTextValue(e.target.value)}
          className="block border rounded-sm"
        />
      </label>
    );
  };

  return [textValue, TextInput];
}

export default useTextInput;
