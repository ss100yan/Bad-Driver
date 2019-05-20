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
    minWidth: 275,
    
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
    const responseFacebook = (response) => {
        console.log(response);
       
        const FbName = response.name;
        const FbImmage = response.picture;
        const FbEmail = response.email;
        console.log(FbName);
        localStorage.setItem("name", FbName)
        localStorage.setItem("photo", FbImmage)
        localStorage.setItem("email", FbEmail)
        localStorage.setItem("isLoggedIn", true)
        this.setState({name: FbName, photo:FbImmage, isLoggedIn:true})
        window.location = '/' 
      }
  
      const responseGoogle = (response) => {
  
        console.log(response.profileObj);
        const googleName = response.profileObj.name;
        const googleImmage = response.profileObj.imageUrl;
        const googleEmail = response.profileObj.email;
        console.log(googleName);
        localStorage.setItem("name", googleName)
        localStorage.setItem("photo", googleImmage)
        localStorage.setItem("email", googleEmail)
        localStorage.setItem("isLoggedIn", true)
        this.setState({name: googleName, photo:googleImmage, isLoggedIn:true})
        window.location = '/' 
      }
      
       const logout =(response) =>{
        localStorage.removeItem("name")
        localStorage.removeItem("photo")
        localStorage.setItem("isLoggedIn")
        this.setState({name: "", photo:"", isLoggedIn:false})
        window.location = '/' 
       }
       localStorage.getItem("name")
    return (
      <div>
        <Button variant="outlined" color="blue" onClick={this.handleClickOpen}>
        Log in
        </Button>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
           
          </DialogTitle>
          <DialogContent>
          
      
      <div style={{paddingLeft:30,paddingTop:30}}>
        <div id="googleButton" style={{}}></div>
        <GoogleLogin

        // for local host
  // clientId= "919709182816-2hg84lnsgi74a4stbp4657ofr7a2keq9.apps.googleusercontent.com"

    // for heroku
    
  clientId= "919709182816-ep64esfta7208lf1qmlcrl3aoiftjq63.apps.googleusercontent.com"
  buttonText="Login with Google"
 
  onSuccess={responseGoogle}
  onFailure={responseGoogle}
  
  cookiePolicy={'single_host_origin'}
 


/>

</div>


   



<div style={{paddingTop:70, paddingBottom:0}}>
<FacebookLogin
    appId="374590499934008"
    autoLoad={false}
    fields="name,email,picture"
    // onClick={componentClicked}
    callback={responseFacebook}
    //   cssClass="my-facebook-button-class"
    // icon="fa-facebook"
    
    />


</div>
      

            <Typography gutterBottom>
            
            </Typography>
            <Typography gutterBottom>
         
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