import React from 'react';
import { Grid, Row, Col, PageHeader, Well } from 'react-bootstrap';
import { Link } from 'react-router';

import styling from '../styling/main.scss';

const YourApp = props =>
(
  <Grid className={styling['your-app']}>
    <Row className="show-grid">
      <Col xs={12}>
        <PageHeader>
          Andrew's React Starting Point <small>with Bootstrap, React Router, Sass</small>
        </PageHeader>
        {props.children}
        <Well bsSize="small">
          <h3>Navigation</h3>
          <ul className="list-inline">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/people">People</Link></li>
          </ul>
        </Well>
      </Col>
    </Row>
  </Grid>
);

YourApp.propTypes = {
  children: React.PropTypes.node,
};

export default YourApp;
