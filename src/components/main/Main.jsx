import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';




const Main = () => {


  const [todoItems, setTodoItems] = useState([])
  const [filterItem, setFilterItem] = useState([]);
  const [filterType, setFilterType] = useState('ALL')

  const createTodolist = (event) => {
    if (event.target.value.trim() !== '') {
      if (event.key === 'Enter') {
        setTodoItems([...todoItems, {
          id: Date.now(),
          text: event.target.value,
          done: false
        }]);
        event.target.value = ''
      }
    }
  };

  useEffect(() => {
    if (filterType === "ALL") {
      setFilterItem(todoItems)
    }
  }, [todoItems, filterType])


  const filterTypeHandler = (type) => {
    setFilterType(type);

    if (type === "ALL") {
      setFilterItem(todoItems);
    } else if (type === "TODO") {
      const newFilterItem = todoItems.filter((item) => !item.done);
      setFilterItem(newFilterItem);
    } else if (type === "DONE") {
      const newFilterItem = todoItems.filter((item) => item.done);
      setFilterItem(newFilterItem);
    }
  }

  const deleteItem = (selectItem) => {
    const newTodoItems = todoItems.filter((item) => item.id !== selectItem.id);
    setTodoItems(newTodoItems);

    // 현재 필터링 유형에 따라 filterItem 배열 업데이트
    if (filterType === "ALL") {
      setFilterItem(newTodoItems);
    } else if (filterType === "TODO") {
      const newFilterItem = newTodoItems.filter((item) => !item.done);
      setFilterItem(newFilterItem);
    } else if (filterType === "DONE") {

      const newFilterItem = newTodoItems.filter((item) => item.done);
      setFilterItem(newFilterItem);
    }
  }


  const doneTodoHandler = (index) => {
    const updatedItems = [...filterItem];
    updatedItems[index].done = !updatedItems[index].done;
    setFilterItem(updatedItems)
  }




  return (
    <>
      <Container>
        <TodoInput onKeyPress={createTodolist}></TodoInput>
        <Filter>
          <div></div>
          <FilterMenu >
            <Allfilter onClick={() => filterTypeHandler("ALL")} filterType={filterType}>ALL</Allfilter>
            <Todofilter onClick={() => filterTypeHandler("TODO")} filterType={filterType}>TODO</Todofilter>
            <DoneFilter onClick={() => filterTypeHandler("DONE")} filterType={filterType}>DONE</DoneFilter>
          </FilterMenu>
        </Filter>
        {filterItem.map((item, idx) =>
          <Todoitem key={idx} isCheck={item.done} >
            <div onClick={() => doneTodoHandler(idx)}>{item.text}</div>
            <button onClick={() => deleteItem(item)}>삭제</button>
          </Todoitem>
        )
        }

      </Container >
    </>
  );
};

export default Main;

const Container = styled.div`
width: 650px;
 margin: auto;
`

const TodoInput = styled.input`
  font-size:2rem;
  color: white;
  width: 650px;
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
width: 650px;
display: flex;
justify-content: space-between;
padding: 10px;
border: 1px solid ${props => (props.isCheck ? "#D2FA64" : "white")};
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
color: ${props => (props.filterType === "ALL" ? "#D2FA64" : "white")};
font-family: Roboto;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
`

const Todofilter = styled.div`
cursor: pointer;
margin-left: 1rem;
color: ${props => (props.filterType === "TODO" ? "#D2FA64" : "white")};
font-family: Roboto;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
`

const DoneFilter = styled.div`
cursor: pointer;
margin-left: 1rem;
color: ${props => (props.filterType === "DONE" ? "#D2FA64" : "white")};
font-family: Roboto;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
`