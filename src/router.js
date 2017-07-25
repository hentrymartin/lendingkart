import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AppContainer from './containers/AppContainer';

class Routes extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router basename="/">
        <Switch>
          <Route path="/" component={AppContainer}/>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
