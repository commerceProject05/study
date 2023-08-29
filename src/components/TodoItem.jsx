import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from '@/styles/theme.js';

const TodoItem = ({ todo, onDeleteTodo, onUpdatedTodoDone }) => {
  const { id, content, done } = todo;

  const handleDelete = (event) => {
    event.stopPropagation();
    onDeleteTodo(id);
  };

  return (
    <TodoItemContainer onClick={() => onUpdatedTodoDone(id, todo)} data-todo-id={id} $done={done}>
      <span>{content}</span>
      <Button onClick={handleDelete}>삭제</Button>
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
      span {
        text-decoration-line: line-through;
        color: ${theme.color.G5};
      }
    `}
`;

const Button = styled.button`
  width: 80px;
  height: 50px;
  border: 1px solid white;
  color: white;
  font-size: 1.5rem;
`;
