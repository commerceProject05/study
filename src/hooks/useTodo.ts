import { useEffect, useState } from 'react';

import { createTodo, deleteTodo, getTodos, Todo, updateTodo } from '@/apis/todos';

type Filter = 'ALL' | 'TODO' | 'DONE';
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
      completed: false,
    };
    const createdData = await createTodo(newTodo);
    setTodos((prev) => [...prev, createdData]);
  };

  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateTodoDone = async (id: number, todo: Todo) => {
    const updatedTodo = await updateTodo(id, { ...todo, completed: !todo.completed });
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

const getTodosFilter = (todos: Todo[], filter: Filter) => {
  if (filter === 'TODO') return todos.filter((todo) => !todo.completed);
  if (filter === 'DONE') return todos.filter((todo) => todo.completed);
  return todos;
};
