import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import { Match, BrowserRouter, Miss } from 'react-router';
import Homepage from './homepage';
import Loader from './loader';

import 'bootstrap/dist/css/bootstrap.css';
import '../styling/index.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    // set your initial state here
    this.state = {
      loading: true,
    };
  }

  componentDidMount () {
    // do any initial ajax calls here
  }

  render() {
    let content;
    if(this.state.loading === true) {
      content = content = <Loader loaderStatus='Initialising awesomeness' />;
    } else {
      content = (
        <BrowserRouter basename="/my-app">
          {({router}) => (
            <div className="my-app">
              <Grid className="body">
                <Row>
                  <Match render={props => <Homepage {...props} />} pattern='/' exactly />
                  <Miss render={() => <h3>Whoops! How did you get here? :)</h3>} />
                </Row>
              </Grid>
              <Footer />
            </div>
          )}
        </BrowserRouter>
    );
  }

  return content;
}
