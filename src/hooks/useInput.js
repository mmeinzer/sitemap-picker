import { useState } from 'react';

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue || '');

  const inputProps = {
    value,
    onChange: e => {
      setValue(e.target.value);
    },
    onBlur: e => {
      setValue(e.target.value);
    },
  };

  return [value, setValue, inputProps];
}
