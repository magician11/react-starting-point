import React from 'react';

const Person = props =>
(
  <div>
    <p><strong>Person ID:</strong> {props.params.personId}</p>
  </div>
);

Person.propTypes = {
  params: React.PropTypes.shape({
    personId: React.PropTypes.string,
  }),
};

export default Person;
