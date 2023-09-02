import axios from 'axios';

// 설정 A
export const client = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

// jwt!
// client.interceptors.request = (config) => {
//   console.log('모든 요청전에 여기에서 정의한 내용을 수행해!');
//
//   // 로그인 유무로 jwt 토큰 값을 가져옴
//   // jwt 토큰 값이 있으면
//   if (jwt) {
//     config.headers.Authorization = `Bearer ${jwt}`;
//   }
// };

// 설정 B
// export const client2 = axios.create({
//   baseURL: 'http://localhost:8080',
//   headers: {
//     'Content-Type': 'multipart/form-data',
//   },
// });
//
// // /todo => 'application/json'
// client.post('/todo', {
//   name: 'value',
// });
//
// axios.post(
//   'http://localhost:8080/todo',
//   {
//     name: 'value',
//   },
//   {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   },
// );
//
// axios.delete('http://localhost:8080/todo', {
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });
//
// axios.patch(
//   'http://localhost:8080/todo',
//   {},
//   {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   },
// );
//
// // /photo => 'multipart/form-data'
// const formData = new FormData();
// formData.append('image', file);
// client2.post('/photo', formData);
//
// axios.post(
//   'http://localhost:8080/photo',
//   {
//     name: 'value',
//   },
//   {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   },
// );
//
// axios.delete('http://localhost:8080/todo', {
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });
//
// axios.patch(
//   'http://localhost:8080/todo',
//   {},
//   {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   },
// );

// http://localhost:8080/todos
// 전체에서 사용할 수 있는 axios
// const todos = axios.get('http://localhost:8080/todos');
// axios.post('http://localhost:8080/todo', {data})

// 설정 A 가 적용된 axios
// client.get('/todos');
// client.post('/todos');
