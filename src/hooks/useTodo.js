import { useEffect, useState } from 'react';

import { client } from '@/apis/index.js';
import { deleteTodo, updateTodo } from '@/apis/todos';

export function useTodo() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('ALL');

  useEffect(() => {
    // getTodos().then((data) => setTodos(data));
    client.get('/todos').then((response) => {
      const data = response.data;
      setTodos(data);
    });
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
    // const createdData = await createTodo(newTodo);
    const response = await client.post('/todo', newTodo);
    const createdData = response.data;
    setTodos((prev) => [...prev, createdData]);
    // setTodos((prev) => [...prev, response.data]);
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateTodoDone = async (id, todo) => {
    const updatedTodo = await updateTodo(id, { ...todo, done: !todo.done }); // 서버에서 데이터 변경
    setTodos(() => todos.map((item) => (item.id === updatedTodo.id ? updatedTodo : item))); // 클라이언트에도 데이터 변경을 시켜주기 위함
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
