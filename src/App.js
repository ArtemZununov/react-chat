import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { chats, messages } from './mock-data';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Body';

const drawerWidth = 320;
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

  componentDidMount(){
    this.scrollDownHistory();
  }

  componentDidUpdate(){
    this.scrollDownHistory();
  }

  scrollDownHistory(){

    const messagesWrapper = this.refs.messagesWrapper;

    if(messagesWrapper){
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }

  render(){
  const { classes } = this.props;
  return (
    <div className={classes.root}>
      <CssBaseline />
     <Header />
      <Sidebar chats={chats}/>
      <Body messages={messages} /> 
    </div>
    );
  }
}

export default withStyles(styles)(App);