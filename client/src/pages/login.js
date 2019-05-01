import React from "react";
import DeleteBtn from "../components/DeleteBtn";
import google from "../components/google";
import GoogleLogin from 'react-google-login';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";




// import React from 'react';
// import ReactDOM from 'react-dom';
// import GoogleLogin from 'react-google-login';
// // or
// import { GoogleLogin } from 'react-google-login';
 
 
const responseGoogle = (response) => {
  console.log(response);
}
 


//   document.getElementById('googleButton')

class login extends React.Component {
 
  
  

  render() {
    return (
      <Container fluid>
        <Row>
            
          <Col size="md-6">
          <div id="googleButton"></div>
          <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
          </Col>
         
         </Row>
     </Container>
    );
  }
}

export default login;
