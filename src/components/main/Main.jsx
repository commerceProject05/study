import React, { useState } from 'react';
import styled from '@emotion/styled';



const Main = () => {

  const [todoItems, setTodoItems] = useState([])
  const [selectFilter, setSelectFilter] = useState()
  const [allFilterclicked, setAllFilterclicked] = useState(true);
  const [todoFilterclicked, setTodoFilterclicked] = useState(false);
  const [doneFilterclicked, setDoneFilterclicked] = useState(false);

  const createTodolist = (event) => {
    if (event.key === 'Enter') {
      setTodoItems([...todoItems,
      event.target.value]);
      event.target.value = ''
    }
  };

  const deleteItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  }
  const allFilterHandler = () => {
    setAllFilterclicked((prev) => !prev)
  }
  const todoFilterHandler = () => {
    setTodoFilterclicked((prev) => !prev)

  }
  const doneFilterHandler = () => {
    setDoneFilterclicked((prev) => !prev)

  }

  return (
    <>
      <Container>
        <TodoInput onKeyPress={createTodolist}></TodoInput>
        <Filter>
          <div></div>
          <FilterMenu>
            <div onClick={allFilterHandler} allFilterclicked={allFilterclicked}>all</div>
            <div onClick={todoFilterHandler}>todo</div>
            <div onClick={doneFilterHandler}>done</div>
          </FilterMenu>
        </Filter>
        {todoItems.map((item, idx) =>
          <Todoitem key={idx}>
            <div>{item}</div>
            <button onClick={() => deleteItem(idx)}>삭제</button>
          </Todoitem>
        )
        }

      </Container>
    </>
  );
};

export default Main;

const Container = styled.div`
width: 750px;
 margin: auto;
`

const TodoInput = styled.input`
  font-size:2rem;
  color: white;
  width: 750px;
  height: 65px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid var(--dark-g-5, #4E5259);
  background: var(--dark-g-3, #1E1D23);
`;

const Todoitem = styled.div`
color:white;
border-radius: 8px;
background: var(--dark-g-35, #212529);
margin: auto;
margin-bottom: 10px;
width: 750px;
display: flex;
justify-content: space-between;
padding: 10px;


`

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`

const FilterMenu = styled.div`
  display: flex;
  div{
    cursor: pointer;
    margin-left: 1rem;
    color: ${props => (props.allFilterclicked ? "red" : "white")};
    font-family: Roboto;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    }
`