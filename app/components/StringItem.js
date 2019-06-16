import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

const StringItem = ({ title }) => <ListGroup.Item>{title}</ListGroup.Item>;

StringItem.propTypes = {
  title: PropTypes.string.isRequired
};

export default StringItem;
