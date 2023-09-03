import { useState } from 'react';

import { Todo } from '@/apis/todos';
function Test() {
  // <>
  // useState 는 숫자가 올 수도 있고 문자도 있고 배열도 올 수 있고, 객체도 올 수 있음
  // <T> 정의할때 제네릭으로 다양한 형태(타입)가 올 수 있어!

  // 사용할 때 <>
  const [count, setCount] = useState<number>(0);
  const [value, setValue] = useState<Todo>({
    id: 1,
    content: 'ss',
    completed: true,
  });
}
