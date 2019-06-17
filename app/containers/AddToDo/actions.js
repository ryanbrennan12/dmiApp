export const ADD_TODO = 'ADD_TODO';
import axios from 'axios';

export function addToDo(title, id) {
  return {
    type: ADD_TODO,
    toDoItem: {
      _id: id,
      title
    }
  };
}


