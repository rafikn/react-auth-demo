import React from 'react';
import { withRouter } from 'react-router';
import DocumentTitle from 'react-document-title';
import {FlatButton, RaisedButton, Paper, TextField} from 'material-ui';

import auth from '../auth'

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  _setUsernameError(err) {
    this.setState({
        usernameError: err
    });
  }

  _setPasswordError(err) {
    this.setState({
        passwordError: err
    });
  }

  _handleUsername (e) {
    this.setState({
        username: e.target.value
    });

    if (this.state.username && this.state.usernameError) {
      this._setUsernameError('');
    }
  }

  _handlePassword (e) {
    this.setState({
        password: e.target.value
    });

    if (this.state.password && this.state.passwordError) {
      this._setPasswordError('');
    }
  }


  login(e) {
    e.preventDefault();

    const username = this.state.username
    const pass = this.state.password

    if (!username) {
      this._setUsernameError('Username Required');
    } else {
      this._setUsernameError('');
    }

    if (!pass) {
      this._setPasswordError('Password Required');
    } else {
      this._setPasswordError('');
    }

    if (username && pass) {
      auth.login(username, pass, (loggedIn) => {
        if (!loggedIn)
          return this.setState({
            passwordError: 'Invalid username or password',
            usernameError: 'Invalid username or password'
          });

        const { location } = this.props

        if (location.state && location.state.nextPathname) {
          this.props.router.replace(location.state.nextPathname)
        } else {
          this.props.router.replace('/')
        }
      })
    }

  }

  render() {
    return (
      <DocumentTitle title='Demo App | Login'>
        <form style={{marginTop: 200}} onSubmit={this.login.bind(this)}>

          <h1 className="main-title" style={{width: '100%', textAlign: 'center'}} >Demo App</h1>

          <Paper zDepth={1} style={{margin: '0 auto', width: 300, textAlign: 'center'}}>
            <TextField style={{width: '80%'}}
              hintText="username"
              floatingLabelText="Username"
              ref="username" onChange={this._handleUsername.bind(this)}
              errorText={this.state.usernameError}
            /><br/>
            <TextField  style={{width: '80%'}}
              hintText="Password"
              floatingLabelText="Password"
              type="password"
              ref="password"  onChange={this._handlePassword.bind(this)}
              errorText={this.state.passwordError}
            /><br/>
          <RaisedButton type="submit" label="Sign In" primary={true} style={{width: '80%', marginTop: 20, marginBottom: 20}} />
            <br/>
            <FlatButton label="forgotten/expired password" primary={true}  style={{fontSize: 12, marginBottom: 20}}/>
            <br/>
          </Paper>
          <footer>
            <img src="public/img/reactjs.png" style={{width: 50}}/><br/>
            <span style={{fontSize: 12}}>powered by <a href="https://facebook.github.io/react/" target="_blank">React</a></span>
          </footer>
        </form>
      </DocumentTitle>
    );
  }

}

export default withRouter(Login);
