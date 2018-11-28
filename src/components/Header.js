import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    appBar: {
        position: 'fixed',
        width: `calc(100% - 320px)`,
      }

});

const Header = ({classes}) => (

        <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            React Chat
          </Typography>
        </Toolbar>
      </AppBar>






);

export default withStyles(styles)(Header);