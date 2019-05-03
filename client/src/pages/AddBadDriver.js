import React from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class AddBadDriver extends React.Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
    plate: "",
    location1: "",
    location2:""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, user: "", title: "", author: "", synopsis: "", plate: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        user: this.state.user,
        author: this.state.author,
        synopsis: this.state.synopsis,
        plate: this.state.plate,
        location1: this.state.location1,
        location2: this.state.location2
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h4>Add New</h4>
            </Jumbotron>
            <form>
            <Input
                value={this.state.user}
                onChange={this.handleInputChange}
                name="user"
                placeholder="user"
              />
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
               <Input
                value={this.state.plate}
                onChange={this.handleInputChange}
                name="plate"
                placeholder="Licecse Plate "
              />  <Input
              value={this.state.author}
              onChange={this.handleInputChange}
              name="author"
              placeholder="You-tube link (required)"
            />
                <Input
                value={this.state.location1}
                onChange={this.handleInputChange}
                name="location1"
                placeholder="Location -longtitude (Optional)"
              />  
              <Input
              value={this.state.location2}
              onChange={this.handleInputChange}
              name="location2"
              placeholder="Location -laditude (Optional)"
            />
            
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="About (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
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

export default AddBadDriver;
