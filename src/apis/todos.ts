import { AxiosResponse } from 'axios';

import { client } from '@/apis/index.ts';

// export type Todo = {
//   id: number;
//   content: string;
//   done: boolean;
// };

// export async function getTodos(): Promise<Todo[]> {
export async function getTodos(): Promise<Todo> {
  const response = await client.get('/todos');
  return response.data;
}

export async function createTodo(payload: Todo): Promise<Todo> {
  const response = await client.post('/todos', payload);
  return response.data;
}

// 유틸리티 타입!
// type P = Partial<Todo>; // v
// type R = Readonly<Todo>;
// type O = Omit<Todo, 'id'>;
// type P = Pick<Todo, 'content' | 'done'>;
// type Filter = 'ALL' | 'DONE' | 'TODO';
// type E = Exclude<Filter, 'ALL'>;

export async function updateTodo(todoId: number, payload: Partial<Todo>): Promise<Todo> {
  const response = await client.patch(`/todos/${todoId}`, payload);
  return response.data;
}

export function deleteTodo(todoId: number): Promise<AxiosResponse> {
  return client.delete(`/todos/${todoId}`);
}
