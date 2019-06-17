import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from './actions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import postToDo from '/Users/ryanbrennan/Desktop/repls/dmiapp/app/api.js'

let AddToDo = ({ dispatch }) => {
  let input;
  let id = new Date().getTime().toString();
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        postToDo(input.value, id)
        dispatch(addToDo(input.value, id));
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


