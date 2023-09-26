import styled from '@emotion/styled';

import TodoItem from '@/components/TodoItem.js';
import { theme } from '@/styles/theme.ts';

type TodoListProps = {
  todos: Todo[];
  onDeleteTodo: (id: number) => Promise<void>;
  onUpdatedTodoDone: (id: number, todo: Todo) => Promise<void>;
};
export function TodoList({ todos, onDeleteTodo, onUpdatedTodoDone }: TodoListProps) {
  return (
    <TodoListWrapper>
      {todos.length === 0 ? (
        <EmptyMessage>데이터가 존재하지 않습니다</EmptyMessage>
      ) : (
        todos.map((todo) => (
          <TodoItem //
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onUpdatedTodoDone={onUpdatedTodoDone}
          />
        ))
      )}
    </TodoListWrapper>
  );
}

export const TodoListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 360px;
  overflow-y: auto;
`;

const EmptyMessage = styled.div`
  color: ${theme.color.G5};
  font-size: 30px;
  text-align: center;
`;
