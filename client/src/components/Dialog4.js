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
import { Input, TextArea, FormBtn } from "../components/Form";
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';
import { blue } from '@material-ui/core/colors';
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
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
    minWidth: 500,
    
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

class CustomizedDialogDemo2 extends React.Component {
  state = {
    open: false,
    name:"",
        photo:"",
        isLoggedIn:false,
        books: [],
        user: "",
        title: "",
        author: "",
        synopsis: "",
        plate: "",
        location1: "",
        location2:"",
        thumbsup: 0,
        thumbsdown: 0
  };
  
  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, user: "", title: "", author: "", synopsis: "", plate: "", location1: "",
        location2:"",  thumbsup: 0,
        thumbsdown: 0})
      )
      .catch(err => console.log(err));
  };

  
   // searches the GoogleBooks API storing the data in books array
   searchBooks = query => {
    API.searchBooks(query)
      .then(res =>
        this.setState(
          {
            location1: res.data.items[0].recordingDetails.location.latitude,
            location2: res.data.items[0].recordingDetails.location.longitude,
           
          },
          console.log(res.data.items[0].recordingDetails.location.latitude),
          console.log(res.data.items[0].recordingDetails.location.longitude),
          console.log(this.state.location1),
          console.log(this.state.location2)
          )
        
       
      )
            
      
      
      .catch(err => console.log(err))
  }; 

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.searchBooks(this.state.author.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/));
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
   
    if (this.state.title && this.state.author) {
      


      API.saveBook({
        title: this.state.title,
        user: localStorage.getItem("name"),
        author: this.state.author.replace("watch?v=", "embed/"),
        synopsis: this.state.synopsis,
        plate: this.state.plate,
        location1:this.state.location1,
        location2: this.state.location2,
        thumbsup: this.state.thumbsup,
        thumbsdown: this.state.thumbsdown,
      })
        .then(res => this.loadBooks(), window.location = '/'  )
        .catch(err => console.log(err))
    

    }
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
        Add
        </Button>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
           
          </DialogTitle>
          <DialogContent>
          
          
        
       
         
         
            <form>
                 
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              /> 
                  <Input
              value={this.state.author}
              onChange={this.handleInputChange}
              name="author"
              placeholder="You-tube link (required)"
            /> 
        
               <Input
                value={this.state.plate}
                onChange={this.handleInputChange }
                name="plate"
                placeholder="License Plate "
              />   

                        
               <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="About (Optional)"
              /> 

 {/* <TextField
          value={this.state.title}
          onChange={this.handleInputChange}
          id="standard-full-width"
          name="title"
          // label="Title"
          style={{ margin: 8 }}
          placeholder="Title "
          // helperText="Login to proceed"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
            
          }}
        />
                   <TextField
          value={this.state.author}
          onChange={this.handleInputChange}
          id="standard-full-width"
          name="author"
          // label="You-tube link"
          style={{ margin: 8 ,}}
          placeholder=" You-tube link"
          // helperText="Login to proceed"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
            
          }}
        />
            <TextField
          value={this.state.plate}
          onChange={this.handleInputChange}
          id="standard-full-width"
          name="plate"
          // label="License Plate"
          style={{ margin: 8 }}
          placeholder="License Plate "
          // helperText="Login to proceed"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
            
          }}
        />
<TextField
         value={this.state.synopsis}
          onChange={this.handleInputChange}
          id="standard-full-width"
          name="synopsis"
          // label="About"
          style={{ margin: 8, }}
          placeholder="About"
          // helperText="Login to proceed"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
            
          }}
        />  */}
              <FormBtn
                disabled={!(localStorage.getItem("name") && this.state.title)}
                onClick={this.handleFormSubmit }
              >
                Submit 
              </FormBtn>
           
            </form>
           
          
         
        
   
    
     

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

export default CustomizedDialogDemo2;