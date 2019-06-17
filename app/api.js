import axios from 'axios';
import { addToDo } from '/Users/ryanbrennan/Desktop/repls/dmiapp/app/containers/AddToDo/actions.js'

const postToDo = (data, id) => {
  axios.post(`http://localhost:3000/addtodo`, { data, id })
      .then(res => {
        console.log(res);
        console.log(res.data)
      })

}

export default postToDo;
