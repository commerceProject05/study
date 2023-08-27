import React, { useState } from 'react';

import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todo, onUpdate, onDelete }) => {
  const [search, setSearch] = useState('');
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === '' ? todo : todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()));
  };

  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input value={search} onChange={onChangeSearch} className="searchbar" placeholder="검색어를 입력하세요" />
      <div className="button_wrapper">
        <button className="buttons" value="All">
          All
        </button>
        <button className="buttons" value="Todo">
          Todo
        </button>
        <button className="buttons" value="Done">
          Done
        </button>
      </div>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
