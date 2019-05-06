import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import SimpleMap from "../components/Map";
import LP from "./LP.jpg"
import { googleName } from "./login";



class Books extends React.Component {
  state = {
    books: [],
    user: "",
    title: "",
    author: "",
    synopsis: "",
    plate: "",
    location1: "25.761681",
    location2:"-80.191788",
    thumbsup: 0,
    thumbsdown: 0
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, user: "", title: "", author: "", synopsis: "", plate: "", location1: "25.761681",
        location2:"-80.191788",  thumbsup: "0",
        thumbsdown: "0"})
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };


  updateThumbsdown = id => {
    API.updateBook(id, {$inc:{thumbsdown:1}})
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };


 addComment = id => {
    API.updateBook(id, {comment:""})
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };


  updateThumbsup = id => {
    API.updateBook(id, {$inc:{thumbsup:1}})
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
        location2: this.state.location2,
        thumbsup: this.state.thumbsup,
        thumbsdown: this.state.thumbsdown,
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
                    <p>added by:<spsm>{book.user}</spsm></p>
                    <p>License Plate:<spam  >{book.plate}</spam></p>
                    <iframe width="100%" height="260"src={book.author}></iframe>
                    <div><SimpleMap/></div>
                      <strong>
                        {book.title} by {book.author}
                        
                      </strong>
           
                    </Link>
                    
                    <br/>

                    <FormBtn
                // disabled={!(this.state.comment)}
                onClick={() => this.updateThumbsdown(book._id)}
              ><span class="glyphicon glyphicon-thumbs-down"></span>
               {book.thumbsdown}
              </FormBtn>

                    <FormBtn
                // disabled={!(this.state.comment)}
                onClick={() => this.updateThumbsup(book._id)}
              ><span class="glyphicon glyphicon-thumbs-up"></span>
               {book.thumbsup}
              </FormBtn>

              
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
              <h5>The worst in May 
                
              </h5>
            </Jumbotron>
            
            <ol>
              <li style={{backgroundImage: 'url(' + LP + ')', height:60 ,width: 300 , fontSize: 30, marginTop:50, paddingTop:30, paddingBottom:60}}>____456____890__</li>
              <li style={{backgroundImage: 'url(' + LP + ')', height:60 ,width: 300 , fontSize: 30, marginTop:50, paddingTop:30, paddingBottom:60}}>____456____990__</li>
              <li style={{backgroundImage: 'url(' + LP + ')', height:60 ,width: 300 , fontSize: 30, marginTop:50, paddingTop:30, paddingBottom:60}}>____456____012__</li>
              <li style={{backgroundImage: 'url(' + LP + ')', height:60 ,width: 300 , fontSize: 30, marginTop:50, paddingTop:30, paddingBottom:60}}>____456____012__</li>
            </ol>
           
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
