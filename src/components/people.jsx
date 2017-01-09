import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router';

const People = props =>
(
  <div>
    <h2>People</h2>
    <ListGroup>
      <ListGroupItem><Link to="/person/1">Andrew Golightly</Link></ListGroupItem>
      <ListGroupItem><Link to="/person/2">Leonardo DiCaprio</Link></ListGroupItem>
    </ListGroup>

    {props.children}
  </div>
);

People.propTypes = {
  children: React.PropTypes.node,
};

export default People;
