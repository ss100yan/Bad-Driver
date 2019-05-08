import React from "react";
import GoogleLogin from 'react-google-login';
import { Col, Row, Container } from "../components/Grid";
import { GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
  

 


class login extends React.Component {
 
      state={
         
        name:"",
        photo:"",
        isLoggedIn:false
      }
   
   
  render() {
 

    const responseGoogle = (response) => {

      console.log(response.profileObj);
      const googleName = response.profileObj.name;
      const googleImmage = response.profileObj.imageUrl
      console.log(googleName);
      localStorage.setItem("name", googleName)
      localStorage.setItem("photo", googleImmage)
      localStorage.setItem("isLoggedIn", true)
      this.setState({name: googleName, photo:googleImmage, isLoggedIn:true})
      
    }
    
     const logout =(response) =>{
      localStorage.removeItem("name")
      localStorage.removeItem("photo")
      localStorage.removeItem("isLoggedIn")
      this.setState({name: "", photo:"", isLoggedIn:false})
     }
     localStorage.getItem("name")
    return (
      <Container fluid>
        <Row>
            
          <Col size="md-6">
          <div id="googleButton"></div>
          <GoogleLogin

          // for local host
    // clientId= "919709182816-2hg84lnsgi74a4stbp4657ofr7a2keq9.apps.googleusercontent.com"

      // for heroku
      
    clientId= "919709182816-ep64esfta7208lf1qmlcrl3aoiftjq63.apps.googleusercontent.com"
    buttonText="Login with Google"
   
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    
    cookiePolicy={'single_host_origin'}
   

  
  />
  
 <div>


 <GoogleLogout
      buttonText="Logout"
      onLogoutSuccess={logout}
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
