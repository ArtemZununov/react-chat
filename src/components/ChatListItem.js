import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from './Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import titleInitials from '../utils/title-initials';

const styles = theme => ({

});

const ChatListItem = ({classes,title}) => (


  <ListItem button>
        <Avatar colorFrom={title}>title</Avatar> 
        <ListItemText primary={title}/>
      </ListItem>




);

export default withStyles(styles)(ChatListItem)