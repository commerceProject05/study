import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from '@/styles/theme.js';

const TodoItem = ({ todo, onDeleteTodo }) => {
  const { id, text, done } = todo;

  const handleUpdateTodoDone = () => {
    const updatedTodo = {
      ...todo,
      done: !todo.done,
    };

    // updateTodo(updatedTodo);
  };

  return (
    <TodoItemContainer onClick={handleUpdateTodoDone} data-todo-id={todo.id} $done={done}>
      {text}
      <Button onClick={() => onDeleteTodo(id)}>삭제</Button>
    </TodoItemContainer>
  );
};

export default TodoItem;

export const TodoItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${theme.color.G3_5};
  border-radius: 0.5rem;
  padding: 1rem;

  color: ${theme.color.G8};
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;

  cursor: pointer;
  &:hover svg {
    visibility: visible;
  }

  ${({ $done }) =>
    $done &&
    css`
      text-decoration-line: line-through;
      color: ${theme.color.G5};
    `}
`;

const Button = styled.button`
  width: 80px;
  height: 50px;
  border: 1px solid white;
  color: white;
  font-size: 1.5rem;
`;
