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
      setTodoItems([...todoItems, {
        id: Date.now(),
        text: event.target.value,
        done: false
      },
      ]);
      event.target.value = ''
    }
  };

  const deleteItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  }
  const allFilterHandler = () => {
    setAllFilterclicked(true)
    setTodoFilterclicked(false)
    setDoneFilterclicked(false)


  }
  const todoFilterHandler = () => {
    setTodoFilterclicked(true)
    setAllFilterclicked(false)
    setDoneFilterclicked(false)

  }
  const doneFilterHandler = () => {
    setDoneFilterclicked(true)
    setAllFilterclicked(false)
    setTodoFilterclicked(false)
  }

  const doneTodoHandler = (index) => {
    selectFilter[index]
  }


  console.log(doneFilterclicked)
  return (
    <>
      <Container>
        <TodoInput onKeyPress={createTodolist}></TodoInput>
        <Filter>
          <div></div>
          <FilterMenu >
            <Allfilter allFilterclicked={allFilterclicked} onClick={allFilterHandler} >all</Allfilter>
            <Todofilter todoFilterclicked={todoFilterclicked} onClick={todoFilterHandler}>todo</Todofilter>
            <DoneFilter doneFilterclicked={doneFilterclicked} onClick={doneFilterHandler}>done</DoneFilter>
          </FilterMenu>
        </Filter>
        {todoItems.map((item, idx) =>
          <Todoitem key={idx}>
            <div onClick={() => doneTodoHandler(idx)}>{item.text}</div>
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
`

const Allfilter = styled.div`
    cursor: pointer;
    margin-left: 1rem;
    color: ${props => (props.allFilterclicked ? "#D2FA64" : "white")};
    font-family: Roboto;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const Todofilter = styled.div`
    cursor: pointer;
    margin-left: 1rem;
    color: ${props => (props.todoFilterclicked ? "#D2FA64" : "white")};
    font-family: Roboto;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const DoneFilter = styled.div`
    cursor: pointer;
    margin-left: 1rem;
    color: ${props => (props.doneFilterclicked ? "#D2FA64" : "white")};
    font-family: Roboto;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`