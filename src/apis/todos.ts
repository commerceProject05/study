import { client } from '@/apis/index.ts';

// 함수 타입 지정 - 반환 값에 타입을 지정하는 것을 추천

//  {
//   "id": 1,
//   "content": "HTML",
//   "completed": true
// },

export type Todo = {
  id: number;
  content: string;
  completed: boolean;
};

// typescript utility type
// export type A = Partial<Todo>;
// export type R = Readonly<Todo>;

// // 객체 형태
// export type O = Omit<Todo, 'id' | 'content'>;
// export type P = Pick<Todo, 'completed'>;
// type Filter = 'ALL' | 'TODO' | 'DONE';
// export type E = Exclude<Filter, 'DONE'>;

export async function getTodos(): Promise<Todo[]> {
  const response = await client.get('/todos');
  return response.data;
}

export async function createTodo(payload: Todo): Promise<Todo> {
  const response = await client.post('/todos', payload);
  return response.data;
}

export async function updateTodo(todoId: Todo['id'], payload: Partial<Todo>): Promise<Todo> {
  const response = await client.patch(`/todos/${todoId}`, payload);
  return response.data;
}

export function deleteTodo(todoId: number) {
  return client.delete(`/todos/${todoId}`);
}
