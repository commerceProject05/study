import { client } from '@/apis/index.js';

export async function getTodos() {
  const response = await client.get('/todos');
  return response.data;
}

// payload === {
//     "id": 10,
//     "content": "test",
//     "done": false
// }
export async function createTodo(payload) {
  const response = await client.post('/todos', payload);
  return response.data;
}

// todoId === 1,
// payload === {
//     "completed": false
// }
export async function updateTodo(todoId, payload) {
  const response = await client.patch(`/todos/${todoId}`, payload);
  return response.data;
  //   response.data === {
  //     "id": 1,
  //     "content": "HTML",
  //     "completed": false
  // }
}

// todoId === 1
export function deleteTodo(todoId) {
  return client.delete(`/todos/${todoId}`);
}
