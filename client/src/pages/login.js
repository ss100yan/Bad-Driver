import React from "react";
import GoogleLogin from 'react-google-login';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { GoogleLogout } from 'react-google-login';

  
 const responseGoogle = (response) => {
  console.log(response.profileObj);
}
 

class login extends React.Component {
 
  
   
   
  render() {
 
    return (
      <Container fluid>
        <Row>
            
          <Col size="md-6">
          <div id="googleButton"></div>
          <GoogleLogin
    clientId= "919709182816-2hg84lnsgi74a4stbp4657ofr7a2keq9.apps.googleusercontent.com"

    // "919709182816-ep64esfta7208lf1qmlcrl3aoiftjq63.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    
    cookiePolicy={'single_host_origin'}
   

  
  />
  
 <div>


 <GoogleLogout
      buttonText="Logout"
    //   onLogoutSuccess={logout}
    >
    </GoogleLogout>
 </div>

          </Col>
         
         </Row>
     </Container>

     
    );
  }
}





export default login;
