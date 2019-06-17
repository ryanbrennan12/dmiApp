import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <Link className="btn btn-primary" to="/">
      Awesome List
    </Link>
    <Link className="btn btn-secondary" to="/new-item">
      + Add New Thing;-)
    </Link>
  </div>
);
