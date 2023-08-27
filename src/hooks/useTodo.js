import { useRef, useState } from 'react';

export function useTodo() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('ALL');
  const nextRef = useRef(1);

  const handleChangeFilter = (filter) => {
    setFilter(filter);
  };

  const handleAddTodo = (todoText) => {
    const newTodo = {
      id: nextRef.current++,
      text: todoText,
      done: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateTodoOone = (id) => {
    const updatedTodos = todos.map((item) => (item.id === id ? { ...item, done: !item.done } : item));
    setTodos(() => updatedTodos);
  };

  return {
    todos: getTodos(todos, filter),
    filter,
    onChangeFilter: handleChangeFilter,
    onAddTodo: handleAddTodo,
    onDeleteTodo: handleDeleteTodo,
    onUpdatedTodoDone: handleUpdateTodoOone,
  };
}

const getTodos = (todos, filter) => {
  if (filter === 'TODO') return todos.filter((todo) => !todo.done);
  if (filter === 'DONE') return todos.filter((todo) => todo.done);
  return todos;
};
