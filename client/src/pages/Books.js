import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
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
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
         
          <Col size="md-7 sm-12">
            <Jumbotron>
              <h4>Latest additions</h4>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                    <p>License Plate: CUUF88</p>
                    <iframe width="550" height="260"src={book.author}></iframe>
                    
                      <strong>
                        {book.title} by {book.author}
                        
                      </strong>
           
                    </Link>
                    
                    <br/>
        <button type="button" class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon-thumbs-up"></span> Like
        </button>

        <button type="button" class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon-thumbs-down"></span> Unlike
        </button>
        <br/>
                    {/* <button type="button" class="btn btn-warning"    >Coments</button> */}
                    <a href={"/books/" + book._id}>Coments</a>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-1"></Col>
           <Col size="md-3">
            <Jumbotron>
              <h5>The worst in May</h5>
            </Jumbotron>
            
            <ol>
              <li>CUUFFF</li>
              <li>CUUFFF</li>
              <li>CUUFFF</li>
              <li>CUUFFF</li>
              <li>CUUFFF</li>
              <li>CUUFFF</li>
              <li>CUUFFF</li>
              <li>CUUFFF</li>
              <li>CUUFFF</li>
              <li>CUUFFF</li>
            </ol>
           
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
