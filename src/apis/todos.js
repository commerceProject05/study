import { client } from '@/apis/index.js';

export async function getTodos() {
  const response = await client.get('/todos');
  return response.data;
}

export async function createTodo(payload) {
  const response = await client.post('/todos', payload);
  return response.data;
}

export async function updateTodo(todoId, payload) {
  const response = await client.patch(`/todos/${todoId}`, payload);
  return response.data;
}

export function deleteTodo(todoId) {
  return client.delete(`/todos/${todoId}`);
}
