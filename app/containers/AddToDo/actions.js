export const ADD_TODO = 'ADD_TODO';
import axios from 'axios';

export function addToDo(title) {
  return {
    type: ADD_TODO,
    toDoItem: {
      _id: (new Date().getTime()).toString(),
      title
    }
  };
}


