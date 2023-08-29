import { useEffect, useState } from 'react';

import { createTodo, deleteTodo, getTodos } from '@/apis/todos';

export function useTodo() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('ALL');

  useEffect(() => {
    getTodos().then((data) => setTodos(data));
  }, []);

  const handleChangeFilter = (filter) => {
    setFilter(filter);
  };

  const handleAddTodo = async (todoText) => {
    const newTodo = {
      id: Date.now(),
      content: todoText,
      done: false,
    };
    const createdData = await createTodo(newTodo);
    setTodos((prev) => [...prev, createdData]);
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateTodoOone = (id) => {
    const updatedTodos = todos.map((item) => (item.id === id ? { ...item, done: !item.done } : item));
    setTodos(() => updatedTodos);
  };

  return {
    todos: getTodosFilter(todos, filter),
    filter,
    onChangeFilter: handleChangeFilter,
    onAddTodo: handleAddTodo,
    onDeleteTodo: handleDeleteTodo,
    onUpdatedTodoDone: handleUpdateTodoOone,
  };
}

const getTodosFilter = (todos, filter) => {
  if (filter === 'TODO') return todos.filter((todo) => !todo.done);
  if (filter === 'DONE') return todos.filter((todo) => todo.done);
  return todos;
};
