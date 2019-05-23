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
import API from "../utils/API";
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';
import { blue } from '@material-ui/core/colors';

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
    minWidth: 420
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
    book: {},
    comments:[""],
    comment:"",
    user: localStorage.getItem("name")
  };
  componentDidMount() {
    API.getBook(this.props.id)
      .then(res => this.setState({ comments: res.data.comments, comment: "" }))
     
     
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

 

  addComment = id => {
    let name = localStorage.getItem("name");
    // {$push: {friends: {firstName: "Harry", lastName: "Potter"}}});
    API.updateBook(id,{$push: {comments:{comments: "--"+this.state.comment ,photo: localStorage.getItem("photo"),name:  "--"+localStorage.getItem("name")}}})
      .then(res => this.componentDidMount(), 
      // window.location = '/'
      )
      .catch(err => console.log(err));
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
        <Button variant="outlined" color="blue" onClick={this.handleClickOpen}>
        Coments:<img src={chat} style={{height:15,width:15}} />
        </Button>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Comments:
          </DialogTitle>
          <DialogContent>
            <Typography gutterBottom>
           <ul> {
          
              // this.props.comments
             this.state.comments
            .map((number) =>
                                         
                                         <li 
                                        //  style={{
                                        // flexDirection: 'column',
                                        //  backgroundColor: '',
                                        //  justifyContent: 'center',
                                        //  alignItems: 'center'}}
                                         
                                         ><img class="img-circle" src={number.photo} style={{height:25,width:25}} />{number.name}<strong>{number.comments}</strong></li>
                                         )}</ul>
                                      {/* <spam>{this.state.comments[0].name}</spam> */}

                      { console.log(this.state.comments) }                 
            </Typography>
            <Typography gutterBottom>


       {/* <div>{this.props.comments}</div>   */}
       <div>{this.state.book.comments}. </div> 
            </Typography>

            <Typography gutterBottom>
            
            </Typography>
          </DialogContent>
          <DialogActions>
         
             <form>
               
              <Input
                value={this.state.comment}
                onChange={this.handleInputChange}
                name="comment"
                placeholder= "! Must be Loged in"
              />
              {/* <FormBtn
               disabled={!(this.state.user && this.state.comment)}
                onClick={() => this.addComment(this.props.id)} 
                > <Icon  >send</Icon>
              </FormBtn> */}
            </form>
            <Button 
            // onClick={this.handleClose} 
            disabled={!(this.state.user && this.state.comment)}
                onClick={() => this.addComment(this.props.id)} 
               
          >
              {/* <a href={"/books/" + this.props.id} > */}
              <Icon  >send</Icon>
                 {/* </a> */}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CustomizedDialogDemo;