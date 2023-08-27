import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onReset = () => setValue(initialValue);

  return { value, onChange, onReset };
};

export default useInput;
