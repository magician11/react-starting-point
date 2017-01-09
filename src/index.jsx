import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import YourApp from './components/index';
import About from './components/about';
import People from './components/people';
import Person from './components/person';
import NoMatch from './components/unknown';
import Home from './components/home';

// remove margins
document.body.style.margin = 0;

require('bootstrap/dist/css/bootstrap.css');

ReactDOM.render((<Router history={browserHistory}>
  <Route path="/" component={YourApp}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="people" component={People}>
      <Route path="/person/:personId" component={Person} />
    </Route>
    <Route path="*" component={NoMatch} />
  </Route>
</Router>
), document.getElementById('app'));
