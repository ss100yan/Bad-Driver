import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import chat from "./chat.svg"
import { Input, TextArea, FormBtn } from "../components/Form";
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';
import { blue } from '@material-ui/core/colors';
import GoogleLogin from 'react-google-login';
import { Col, Row, Container } from "../components/Grid";
import { GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import Logo from "./Logo.jpg"
const styles = theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing.unit * 2,
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing.unit,
  },
});



const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
    minWidth: 250,
    
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit,
  },
}))(MuiDialogActions);

class CustomizedDialogDemo extends React.Component {
  state = {
    open: false,
    name:"",
        photo:"",
        isLoggedIn:false
    
  };
  

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    
      
      
    return (
      <div>
        <a variant="outlined" color="blue" onClick={this.handleClickOpen}>
        About
        </a>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
           
          </DialogTitle>
          <DialogContent>
          
      
     

            <Typography gutterBottom>
            
            </Typography>
            <Typography gutterBottom>
            {/* <h1 style={{color:"blue"}}>KASP INC.</h1> */}
            <img  src={Logo} style={{height:150,width:150}} />
            <h6>&copy;KASP INC. 2019</h6>
            <a href = "mailto: ss100yan@gmail.com">Send Email</a>
            </Typography>
            <Typography gutterBottom>
            
            </Typography>
          </DialogContent>
          <DialogActions>
         
        
            <Button >
           
            </Button>
          </DialogActions>
        </Dialog>
        
      </div>
      
    );
  }
}

export default CustomizedDialogDemo;