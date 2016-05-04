import React from 'react';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';
import Layout from './Layout.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

import auth from '../auth';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  }


  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} onEnter={this.requireAuth.bind(this)} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />

        </Route>
      </Router>
    );
  }
}

export default App;
