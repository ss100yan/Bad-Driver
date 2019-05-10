import React from "react";
import GoogleLogin from 'react-google-login';
import { Col, Row, Container } from "../components/Grid";
import { GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
  

 


class logout extends React.Component {
 
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





export default logout;
