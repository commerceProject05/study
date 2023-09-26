import { MouseEvent } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteTodo, updateTodo2 } from '@/apis/todos.ts';
import { theme } from '@/styles/theme.ts';

type TodoItemProps = {
  todo: Todo;
};
const TodoItem = ({ todo }: TodoItemProps) => {
  const { id, content, done } = todo;
  const { mutate: deleteTodoMutate } = useMutation((id: number) => deleteTodo(id), {
    onSuccess: () => {},
  });
  const { mutate: updateTodoMutate } = useMutation((todo: Todo) => updateTodo2(todo));

  const queryClient = useQueryClient();

  const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    deleteTodoMutate(id, {
      onSuccess: () => {
        alert('삭제되었습니다');
      },
    });
    // onDeleteTodo(id);
  };

  const handleUpdateTodo = () => {
    updateTodoMutate(
      { ...todo, done: !todo.done },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries(['todo']);
        },
      },
    );
  };

  return (
    // <TodoItemContainer onClick={() => onUpdatedTodoDone(id, todo)} data-todo-id={id} $done={done}>
    <TodoItemContainer onClick={handleUpdateTodo} data-todo-id={id} $done={done}>
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
