import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ChatListItem from './ChatListItem';

const styles = theme => ({
    chatsList: {
        height: 'calc(100% - 56px)',
        overflowY: 'scroll',
      }
  });


const ChatList = ({classes,chats})=>(


<List className={classes.chatsList}>
    {chats && chats.map((chat, index) => (
         <ChatListItem key={index} {...chat} />
    ))}
</List>





);

export default withStyles(styles)(ChatList);