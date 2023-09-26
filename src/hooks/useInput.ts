import {ChangeEvent, useState} from 'react';

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: ChangeEvent<HTMLInputElement> ) => {
    setValue(event.target.value);
  };

  const onReset = () => setValue(initialValue);

  return { value, onChange, onReset };
};

export default useInput;
