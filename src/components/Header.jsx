import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import { AppBar, IconMenu, MenuItem, IconButton, MoreVertIcon, FontIcon, Drawer, Divider } from 'material-ui';

import {cyan500} from 'material-ui/styles/colors';
import {spacing, typography, zIndex} from 'material-ui/styles';

const logo = {
  cursor: 'pointer',
  fontSize: 24,
  color: typography.textFullWhite,
  lineHeight: `${spacing.desktopKeylineIncrement}px`,
  fontWeight: typography.fontWeightNormal,
  backgroundColor: cyan500,
  paddingLeft: spacing.desktopGutter,
};


export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {

    return (
      <div>
        <AppBar
          title="Demo App"
          onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
          iconElementRight={
            <IconMenu
              iconButtonElement={<IconButton><FontIcon className="material-icons">more_vert</FontIcon></IconButton>}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
            >
            <MenuItem primaryText="Other Menu" />
            <Divider />
            <Link to="logout" style={{textDecoration: 'none'}}>
              <MenuItem primaryText="Sign out" />
            </Link>
            </IconMenu>
          }
        />

        <Drawer open={this.state.open}>
          <div style={logo} onClick={this.handleToggle.bind(this)}>
            Demo App
          </div>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
          <Divider />
          <MenuItem><Link to="logout" style={{textDecoration: 'none'}}>Sign Out</Link></MenuItem>

        </Drawer>
      </div>
    );
  }

}
