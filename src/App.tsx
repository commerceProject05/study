import styled from '@emotion/styled';

import TodoAppender from '@/components/TodoAppender.jsx';
import TodoFilter from '@/components/TodoFilter.jsx';
import TodoItem from '@/components/TodoItem.jsx';
import { useTodo } from '@/hooks/useTodo.js';

function App() {
  const { todos, filter, onChangeFilter, onAddTodo, onDeleteTodo } = useTodo();

  const handleChangeFilter = (filter: any) => {
    onChangeFilter(filter);
  };

  const todoList = getTodos(todos, filter);

  return (
    <Wrapper>
      <ContentWrapper>
        <TodoAppender onAddTodo={onAddTodo} />
        <TodoFilter filter={filter} onChangeFilter={handleChangeFilter} />
        <TodoList>
          {todoList.map((todo: any) => (
            <TodoItem //
              key={todo.id}
              todo={todo}
              onDeleteTodo={onDeleteTodo}
            />
          ))}
        </TodoList>
      </ContentWrapper>
    </Wrapper>
  );
}

const getTodos = (todos: any, filter: any) => {
  if (filter === 'TODO') return todos.filter((todo: any) => !todo.done);
  if (filter === 'DONE') return todos.filter((todo: any) => todo.done);
  return todos;
};

export default App;

export const Wrapper = styled.main`
  height: calc(100vh - 88px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.section`
  width: 750px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 360px;
  overflow-y: auto;
`;
