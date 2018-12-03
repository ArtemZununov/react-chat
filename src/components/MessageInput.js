import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({ 

    messageInputWrapper: {
        position: 'fixed',
        left: 'auto',
        right: 0,
        bottom: 0,
        width: `calc(100% - 320px)`,
        padding: theme.spacing.unit * 3,
      },
      messageInput: {
        padding: theme.spacing.unit * 2,
      }



 });



class MessageInput extends React.Component{

    render(){
            const  { classes } = this.props;

        return(

<div className={classes.messageInputWrapper}>
      <Paper className={classes.messageInput} elevation={6}>
      <TextField
    id="standard-full-width"
    label="Type message"
    fullWidth
  />
      </Paper>
</div>



        );



    }

}


export default withStyles(styles)(MessageInput)