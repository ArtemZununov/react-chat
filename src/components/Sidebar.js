import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import titleInitials from '../utils/title-initials';

const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        height: '100%',
        width: 320,
      },
      drawerHeader: {
        ...theme.mixins.toolbar,
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3,
      },
      chatsList: {
        height: 'calc(100% - 56px)',
        overflowY: 'scroll',
      },
      newChatButton: {
        position: 'absolute',
        left: 'auto',
        right: theme.spacing.unit * 3,
        bottom: theme.spacing.unit * 3 + 48, // + bottom navigation
      },

});

const Sidebar = ({classes,chats}) => (


    



<Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
      
        <div className={classes.drawerHeader}>
            <TextField
              fullWidth
              margin="normal"
              placeholder="Search chats..."
            />
          </div>
          <Divider />



          
  
         
         <List className={classes.chatsList}>
            {chats.map((chat, index) => (
              <ListItem key={index} button>
                <Avatar>{titleInitials(chat.title)}</Avatar>
                <ListItemText primary={chat.title}/>
              </ListItem>
            ))}
          </List>
         
       
     
        



       <Button
            variant="fab"
            color="primary"
            className={classes.newChatButton}
          >
            <AddIcon />
          </Button>
          <BottomNavigation showLabels>
            <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
          </BottomNavigation>
      
        
      </Drawer>

);


export default withStyles(styles)(Sidebar);