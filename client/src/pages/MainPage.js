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
import chat from "./chat.svg"
import user from "./user.svg"
import  CustomizedDialogDemo from "././../components/Dialog"


class Books extends React.Component {
  state = {
    books: [],
    user: localStorage.getItem("name"),
    title: "",
    author: "",
    synopsis: "",
    plate: "",
    location1: "",
    location2:"",
    thumbsup: 0,
    thumbsdown: 0,
    thumbsUpDownEmail: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, user: "", title: "", author: "", synopsis: "", plate: "", location1: "",
        location2:"",  thumbsup: "0",
        thumbsdown: "0",thumbsUpDownEmail: ""})
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };


 

 addComment = id => {
    API.updateBook(id,{$push: {comments:"comment"}})
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  // thumbsUpDownEmailt = id => {
  //   API.updateBook(id,{$push: {thumbsUpDownEmail:localStorage.getItem("email")}})
  //     // .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  updateThumbsdown = id => {
    if
     (! this.state.books.find(x => x._id == id).thumbsUpDownEmail.includes(localStorage.getItem("email")))
  
    {console.log(this.state.books.find(x => x._id !== id).thumbsUpDownEmail );
    API.updateBook(id, {$inc:{thumbsdown:1} , $push: {thumbsUpDownEmail:localStorage.getItem("email")}})
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
    }
  };



  updateThumbsup = id => {
    if
    (! this.state.books.find(x => x._id == id).thumbsUpDownEmail.includes(localStorage.getItem("email")))
    {
    API.updateBook(id, {$inc:{thumbsup:1} , $push: {thumbsUpDownEmail:localStorage.getItem("email")}})
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
    }
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
        user: localStorage.getItem("name"),
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
          
            {/* <Jumbotron>
              <h4>Latest additions</h4>
            </Jumbotron> */}
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (

                  <ListItem key={book._id}>

                    <Link to={"/books/" + book._id}>

                    <p><img src={user} style={{height:25,width:25}} />    <spsm>{book.user}</spsm></p>

                    <p>License Plate:<spam  >{book.plate}</spam></p>
                    
                     <strong>

                        {book.title} 
                        
                        {/* by {book.author} */}
                        
                      </strong>

                    <iframe width="100%" height="260"src={book.author}></iframe>

                    <div><SimpleMap lat={book.location1} lng={book.location2} /></div>

                     
           
                    </Link>
                    
                    <br/>

                    <FormBtn
               disabled={!(localStorage.getItem("name") )}
                onClick={() => this.updateThumbsdown(book._id)}
              ><span class="glyphicon glyphicon-thumbs-down"></span>
               {book.thumbsdown}
              </FormBtn>

                    <FormBtn
                disabled={!(localStorage.getItem("name") )}
                onClick={() => this.updateThumbsup(book._id)}
              ><span class="glyphicon glyphicon-thumbs-up"></span>
               {book.thumbsup}
              </FormBtn>

              
                    {/* <a href={"/books/" + book._id} style={{fontWeight: 'bold'}}>Leave a coment</a> */}

                    {/*DeleteBtn for development use only */}

                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}

                    
                    <CustomizedDialogDemo comments={book.comments} id={book._id}/>
                          {/* <br></br> <p style={{fontWeight: 'bold'}}>Coments:<img src={chat} style={{height:15,width:15}} /></p> */}
                          
                           
                                                      
                                {/* {book.comments.map((number) =>
                                         
                                         <li style={{
                                        flexDirection: 'column',
                                         backgroundColor: 'grey',
                                         justifyContent: 'center',
                                         alignItems: 'center'}}>{number}</li>
                                         )} */}

                                   
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
              <h3 style={{color:'white'}}>Most popular</h3>
            </Jumbotron>
            <ol style={{color:'white' ,paddingLeft:65}}>
            {this.state.books
            .sort((b, a) => parseFloat(a.thumbsup) - parseFloat(b.thumbsup))
            // .sort(book=>{book.thumbsup})
            .map(book => (
            
                     

              <li><spam class="img-thumbnail" style={{backgroundImage: 'url(' + LP + ')', height:19 ,width: 169 , fontSize: 24, marginTop:20, marginLeft:0, marginBottom:0, paddingTop:30, paddingBottom:54}}><strong style={{color:"black", marginLeft:40}}>{book.plate}</strong></spam></li>))}

              {/* .sort()
              .map() */}
          </ol>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
