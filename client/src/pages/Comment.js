import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import AddBadDriver from "./AddBadDriver";

class Comment extends Component {
  state = {
    book: {},
    comment:""
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }


  addComment = id => {
    API.updateBook(id, {comments:123})
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
       
          </Col>
        </Row>
        <Row>
          <Col size="md-6 md-offset-1">
            <article>
              <h1>Leave a comment</h1>
              
            </article>
         
            <form>
              <TextArea
                value={this.state.comment}
                // onChange={this.handleInputChange}
                name="comment"
                placeholder="Comment"
              />
              <FormBtn
                // disabled={!(this.state.comment)}
                onClick={() => this.updateComment(this.props.match.params.id)} >
             
                Submit 
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Main Page</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Comment;
