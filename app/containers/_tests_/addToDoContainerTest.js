import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from './AddToDo/index.js';


describe('AddTodo', () => {
  it('should render correctly in "debug" mode', () => {

    const component = shallow(<AddTodo debug />);

    expect(component).toMatchSnapshot();
  });
});

it('should render correctly with no props', () => {
  const component = shallow(<AddTodo />);

  expect(component).toMatchSnapshot();
});
