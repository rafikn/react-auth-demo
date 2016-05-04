import React from 'react';
import Header from './Header.jsx';

import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import rawTheme from 'material-ui/styles/baseThemes/lightBaseTheme';



export default class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      muiTheme: getMuiTheme(rawTheme)
    }
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme
    };
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={this.state.muiTheme} style={{background: '#fefefe'}}>
          { this.props.children }
      </MuiThemeProvider>
    );
  }

}
