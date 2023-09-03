import { MouseEvent } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Todo } from '@/apis/todos';
import { theme } from '@/styles/theme.js';

type TodoItemProps = {
  todo: Todo;
  onDeleteTodo: (id: number) => void;
  onUpdatedTodoDone: (id: number, todo: Todo) => void;
};

const TodoItem = ({ todo, onDeleteTodo, onUpdatedTodoDone }: TodoItemProps) => {
  const { id, content, completed } = todo;

  const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onDeleteTodo(id);
  };

  return (
    <TodoItemContainer onClick={() => onUpdatedTodoDone(id, todo)} data-todo-id={id} $done={completed}>
      <span>{content}</span>
      <Button onClick={handleDelete}>삭제</Button>
    </TodoItemContainer>
  );
};

export default TodoItem;

export const TodoItemContainer = styled.li<{ $done: boolean }>`
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
