import { ADD_TODO } from './actions';
import { RENDER_TODO_LIST } from '/Users/ryanbrennan/Desktop/repls/dmiapp/app/containers/ToDoListContainer/actions.js';

const initialState = {
  toDoList: []
};

export default function toDoApp(state = initialState, action) {
  switch (action.type) {
    case RENDER_TODO_LIST:
      return {
        ...state,
        toDoList: action.toDoList
      };
      case ADD_TODO:
      //just adding it to state
      let newToDoList = [...state.toDoList,{ ...action.toDoItem}];
      return {
        ...state,
        toDoList: newToDoList
      };
    default:
      return state;
  }
}
