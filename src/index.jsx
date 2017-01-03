import React from 'react';
import ReactDOM from 'react-dom';
import YourComponent from './components/index';

// remove margins
document.body.style.margin = 0;

require('bootstrap/dist/css/bootstrap.css');

ReactDOM.render(<YourComponent />, document.getElementById('app'));
