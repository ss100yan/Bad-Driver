import React  from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import comment from "./Comment";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});


// function YouTubeGetID(url){
//   var ID = '';
//   url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
//   if(url[2] !== undefined) {
//     ID = url[2].split(/[^0-9a-z_\-]/i);
//     ID = ID[0];
//   }
//   else {
//     ID = url;
//   }
//     return ID;
// }



class AddBadDriver extends React.Component {
 
  state = {
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

  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-3"></Col>
          <Col size="md-6">
            <Jumbotron>
            
           
              {/* <h4>login to proceed</h4> */}
              
              </Jumbotron>
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
           
          </Col>
         
         </Row>
     </Container>
    );
  }
}

export default withStyles(styles)(AddBadDriver);
