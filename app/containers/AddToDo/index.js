import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from './actions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export function* insertToDo(item) {
  const postUrl = 'http://localhost:3000/addtodo'
  const response = yield fetch(postUrl, {
    method: 'POST',
    headers: {
      Acccept: 'application/json',
      'Content-Type': 'application/json'
    },
    //TEST INPUT
    body: JSON.stringify({
      _id: item.id,
      name: item.name
    })
  });
  yield put({ type: ADD_TODO, toDoList: data });
  console.log(`response = ${JSON.stringify(response)}`);
  return yield(response.status === 201);
}

let AddToDo = ({ dispatch }) => {
  let input;

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        //consider moviing this di
        dispatch(addToDo(input.value));
        input.value = '';
      }}
    >
      <Form.Group controlId="formBasicEmail">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Enter an item"
            ref={node => {
              input = node;
            }}
          />
          <InputGroup.Append>
            <Button type="submit">Add a thing</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Form>
  );
};
AddToDo = connect()(AddToDo);

export default AddToDo;
