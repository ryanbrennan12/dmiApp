import { connect } from 'react-redux';
import ToDoList from '/Users/ryanbrennan/Desktop/repls/dmiapp/app/components/ToDoList.js';

const mapStateToProps = state => {
  return {
    toDoList: state.toDoList
  };
};

const ToDoListContainer = connect(mapStateToProps)(ToDoList);

export default ToDoListContainer;
