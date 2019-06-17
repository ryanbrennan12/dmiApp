import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_TODO_LIST, RENDER_TODO_LIST } from '/Users/ryanbrennan/Desktop/repls/dmiapp/app/containers/ToDoListContainer/actions.js';
import { ADD_TODO } from '/Users/ryanbrennan/Desktop/repls/dmiapp/app/containers/AddToDo/actions.js';

export function* fetchToDoList() {
  const endpoint = 'http://localhost:3000/onmount';
  console.log('i am fetch', fetch)
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put({ type: RENDER_TODO_LIST, toDoList: data });
}

export function* loadToDoList() {
  yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
}
//triggered by  insertTodo (saga)
//A saga to listens for ADD_TODO (ACTIONS)
//will trigger our post request
export function* postListener() {
  yield takeEvery(ADD_TODO, insertTodo)
}

// export function* insertToDo(item) {
//   const postUrl = 'http://localhost:3000/addtodo'
//   const response = yield fetch(postUrl, {
//     method: 'POST',
//     headers: {
//       Acccept: 'application/json',
//       'Content-Type': 'application/json'
//     },
//     //TEST INPUT
//     body: JSON.stringify({
//       _id: item.id,
//       name: item.name
//     })
//   });
//   yield put({ type: ADD_TODO, toDoList: data });
//   console.log(`response = ${JSON.stringify(response)}`);
//   return yield(response.status === 201);
// }

export default function* rootSaga() {
  yield all([loadToDoList()]);
}




