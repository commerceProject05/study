import { useEffect, useState } from 'react';

import { createTodo, deleteTodo, getTodos, updateTodo } from '@/apis/todos.js';

export function useTodo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>('ALL');

  useEffect(() => {
    getTodos().then((data) => setTodos(data));
  }, []);

  const handleChangeFilter = (filter: Filter) => {
    setFilter(filter);
  };

  const handleAddTodo = async (todoText: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      content: todoText,
      done: false,
    };
    const createdData = await createTodo(newTodo);
    setTodos((prev) => [...prev, createdData]);
  };

  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateTodoDone = async (id: number, todo: Todo) => {
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

const getTodosFilter = (todos: Todo[], filter: Filter): Todo[] => {
  if (filter === 'TODO') return todos.filter((todo) => !todo.done);
  if (filter === 'DONE') return todos.filter((todo) => todo.done);
  return todos;
};
