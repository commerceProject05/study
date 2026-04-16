import React, { useState } from 'react';
import { Container, TodoItem, Wrapper } from './Todo.styles';
import { theme } from '@/styles/theme';

const initialState = [
  { id: 1, text: '내용입력 예시1', done: true },
  { id: 2, text: '내용입력 예시2', done: true },
  { id: 3, text: '내용입력 예시3', done: false },
];

const tabData = [
  { id: 'all', title: 'all', content: initialState },
  { id: 'todo', title: 'todo', content: initialState },
  { id: 'done', title: 'done', content: initialState },
];

let nextId = 4;

const Todo = () => {
  const [todos, setTodos] = useState(initialState);
  const [input, setInput] = useState('');
  // const [activeTab, setActiveTab] = useState(tabData);
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: nextId++, text: input, done: false }]);
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

  const filteredTodos = todos.filter((todo) => {
    if (activeTab === 'all') {
      return true;
    } else if (activeTab === 'todo') {
      return !todo.done;
    } else if (activeTab === 'done') {
      return todo.done;
    }
    return true;
  });

  const ItemList = filteredTodos.map((todo) => (
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
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.title)}
              className={activeTab === tab.id ? 'active' : ''}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <TodoItem>{ItemList}</TodoItem>
      </Container>
    </Wrapper>
  );
};

export default Todo;
