import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_TODO_LIST, RENDER_TODO_LIST } from '/Users/ryanbrennan/Desktop/repls/dmiapp/app/containers/ToDoListContainer/actions.js';
import { ADD_TODO } from '/Users/ryanbrennan/Desktop/repls/dmiapp/app/containers/AddToDo/actions.js';

export function* fetchToDoList() {
  const endpoint = 'http://localhost:3000/api/onmount';
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put({ type: RENDER_TODO_LIST, toDoList: data });
}

export function* loadToDoList() {
  yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
}

// export function* addPost(data) {

// }

export default function* rootSaga() {
  yield all([loadToDoList()]);
}
