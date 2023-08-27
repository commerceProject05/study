import React, { useRef } from 'react';
import styled from '@emotion/styled';

const Main = () => {
  const todo = useRef('');
  const createTodolist = (event) => {
    if (event.key === 'Enter') {
      console.log(event.target.value);
    }
  };
  return (
    <>
      <Container>
        <TodoInput ref={todo} onKeyDown={createTodolist}></TodoInput>
      </Container>
    </>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  height: 90px;
  padding: 10px 32px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;

const TodoInput = styled.input`
  width: 750px;
  height: 65px;
`;
