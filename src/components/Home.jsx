import React from 'react';
import DocumentTitle from 'react-document-title';
import Header from './Header.jsx';
import { Link } from 'react-router';
import {Divider, Drawer, MenuItem} from 'material-ui';


import auth from '../auth'


export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loggedIn: auth.loggedIn(),
      open: true
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <DocumentTitle title="Demo App | Home">
        <div>
          <Header />
          <br />
          <div>
            // rest of you app here
          </div>
        </div>

      </DocumentTitle>
    );
  }

}
