import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';

import { getTodos } from '@/apis/todos.ts';
import TodoAppender from '@/components/TodoAppender.js';
import TodoFilter from '@/components/TodoFilter.js';
import { TodoList } from '@/components/TodoList.js';
import { useTodo } from '@/hooks/useTodo.js';

function App() {
  const { filter, onChangeFilter } = useTodo();

  // const todos = [];
  const { data: todos = [], isError } = useQuery(['b'], () => getTodos());

  const handleChangeFilter = (filter: Filter) => {
    onChangeFilter(filter);
  };

  if (isError) return <h2>에러가 발생했습니다</h2>;
  return (
    <TodoPageWrapper>
      <TodoContainer>
        <TodoAppender />
        <TodoFilter filter={filter} onChangeFilter={handleChangeFilter} />
        <TodoList
          todos={todos} //
        />
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
