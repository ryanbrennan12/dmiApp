import axios from 'axios';
import { addToDo } from '/Users/ryanbrennan/Desktop/repls/dmiapp/app/containers/AddToDo/actions.js'

const postToDo = (data) => {
  axios.post(`http://localhost:3000/addtodo`, { data })
      .then(res => {
        console.log(res);
        console.log(res.data);
        // dispatch(addToDo(res.data));
      })
}

export default postToDo;
