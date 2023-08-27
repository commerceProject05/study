import React from 'react';
import styled from '@emotion/styled';

import useInput from '@/hooks/useInput.js';
import { theme } from '@/styles/theme.js';

const TodoAppender = ({ onAddTodo }) => {
  const { value, onChange, onReset } = useInput('');

  const handleSubmit = (event) => {
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
