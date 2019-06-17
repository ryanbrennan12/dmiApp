//Our App.js

import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import AddToDo from '../AddToDo';
import ToDoListContainer from '../ToDoListContainer';

class App extends Component {
  render() {
    return (
       <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>DMI App</h1>
            <AddToDo />
            <ToDoListContainer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;


