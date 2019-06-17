//Our App.js

import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AddToDo from '../AddToDo';
import ToDoListContainer from '../ToDoListContainer';

import { Route } from 'react-router-dom';
import Navigation from 'components/Navigation.js';


class App extends Component {
  render() {
    return (
       <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>DMI App</h1>
            <Navigation />
            <Route exact path="/" component={ToDoListContainer} />
            <Route exact path="/new-item" component={AddToDo} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;


