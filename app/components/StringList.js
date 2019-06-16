import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import StringItem from './StringItem';

const StringList = ({ stringList }) => (
  <Jumbotron>
    <ListGroup>
      {stringList.map((item, index) => (

        <StringItem key={index} {...item}/>
      ))}
    </ListGroup>
  </Jumbotron>
);

// StringList.propTypes = {
//   StringList: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired
// };

export default StringList;
