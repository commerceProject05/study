import styled from '@emotion/styled';

import TodoAppender from '@/components/TodoAppender.jsx';
import TodoFilter from '@/components/TodoFilter.jsx';
import { TodoList } from '@/components/TodoList.jsx';
import { Filter, useTodo } from '@/hooks/useTodo.js';

function App() {
  const { todos, filter, onChangeFilter, onAddTodo, onDeleteTodo, onUpdatedTodoDone } = useTodo();

  const handleChangeFilter = (filter: Filter) => {
    onChangeFilter(filter);
  };

  return (
    <TodoPageWrapper>
      <TodoContainer>
        <TodoAppender onAddTodo={onAddTodo} />
        <TodoFilter filter={filter} onChangeFilter={handleChangeFilter} />
        <TodoList todos={todos} onDeleteTodo={onDeleteTodo} onUpdatedTodoDone={onUpdatedTodoDone} />
      </TodoContainer>
    </TodoPageWrapper>
  );
}

export default App;

export const TodoPageWrapper = styled.main`
  height: calc(100vh - 88px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TodoContainer = styled.section`
  width: 750px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
