import { useEffect, useState } from 'react';

import { createTodo, deleteTodo, getTodos, updateTodo } from '@/apis/todos';

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

  const handleUpdateTodoDone = async (id, todo) => {
    const updatedTodo = await updateTodo(id, { ...todo, done: !todo.done });
    setTodos(() => todos.map((item) => (item.id === updatedTodo.id ? updatedTodo : item)));
  };

  return {
    todos: getTodosFilter(todos, filter),
    filter,
    onChangeFilter: handleChangeFilter,
    onAddTodo: handleAddTodo,
    onDeleteTodo: handleDeleteTodo,
    onUpdatedTodoDone: handleUpdateTodoDone,
  };
}

const getTodosFilter = (todos, filter) => {
  if (filter === 'TODO') return todos.filter((todo) => !todo.done);
  if (filter === 'DONE') return todos.filter((todo) => todo.done);
  return todos;
};
