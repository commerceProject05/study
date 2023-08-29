import { client } from '@/apis/index.js';

export async function getTodos() {
  const response = await client.get('/todos');
  return response.data;
}

export async function createTodo(payload) {
  const response = await client.post('/todos', payload);
  return response.data;
}

// GYU-TODO: 인자 여러개 말고 단순하게 받을 수 있도록 고민하기
export async function updateTodo(todoId, payload) {
  const response = await client.put(`/todos/${todoId}`, payload);
  return response.data;
}

export function deleteTodo(todoId) {
  return client.delete(`/todos/${todoId}`);
}
