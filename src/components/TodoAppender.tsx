import { FormEvent } from 'react';
import styled from '@emotion/styled';

import { useInput } from '@/hooks/useInput.ts';
import { theme } from '@/styles/theme.js';

type TodoAppenderProps = {
  onAddTodo: (value: string) => void;
};
const TodoAppender = ({ onAddTodo }: TodoAppenderProps) => {
  const { value, onChange, onReset } = useInput('');

  // <>
  // useState 는 숫자가 올 수도 있고 문자도 있고 배열도 올 수 있고, 객체도 올 수 있음

  // const [count, setCount] = useState<number>(0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value.trim() === '') return;

    onAddTodo(value);
    onReset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input //
        type="text"
        placeholder="할 일을 입력 후, Enter 를 누르세요"
        autoFocus
        value={value}
        onChange={onChange}
      />
    </Form>
  );
};

export default TodoAppender;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: ${theme.color.G3};
  padding: 27.5px 32px;
  border-radius: 8px;
  border: 1px solid ${theme.color.G5};
  height: 90px;
`;

export const Input = styled.input`
  background-color: transparent;
  width: 100%;

  outline: none;
  border: none;

  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  color: ${theme.color.G8};

  &::placeholder {
    color: ${theme.color.G5};
  }
`;
