import React, { useState } from 'react';
import { Container, TodoItem, Wrapper } from './Todo.styles';

const initialState = [
  { id: 1, text: '내용입력 예시1', done: true },
  { id: 2, text: '내용입력 예시2', done: true },
  { id: 3, text: '내용입력 예시3', done: false },
];

let nextId = 4;

const Todo = () => {
  const [todos, setTodos] = useState(initialState);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: nextId++, text: input, done: false }]);

    console.log(nextId);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleRemove = (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };

  const ItemList = todos.map((todo) => (
    <li key={todo.id} onClick={() => handleToggle(todo.id)} style={{ textDecoration: todo.done && 'line-through' }}>
      {todo.text}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleRemove(todo.id);
        }}
      >
        <img src="trash.svg" alt="삭제버튼" style={{ textDecoration: todo.done && 'line-through' }} />
      </button>
    </li>
  ));

  return (
    <Wrapper>
      <Container>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleInput} placeholder="할 일을 입력 후, Enter 를 누르세요" />
        </form>
        <div className="button_box">
          <button>ALL</button>
          <button>TODO</button>
          <button>DONE</button>
        </div>
        <TodoItem>{ItemList}</TodoItem>
      </Container>
    </Wrapper>
  );
};

export default Todo;
