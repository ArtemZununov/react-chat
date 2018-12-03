import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { chats, messages } from '../mock-data';

import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
});

class App extends React.Component {



  render(){
  const { classes } = this.props;
  return (
    <div className={classes.root}>
   
     <Header />
      <Sidebar chats={chats}/>
      <Chat messages={messages} /> 
    </div>
    );
  }
}

export default withStyles(styles)(App);