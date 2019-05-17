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
 
    const responseFacebook = (response) => {
      console.log(response);
     
      const FbName = response.name;
      const FbImmage = response.picture;
      const FbEmail = response.email;
      console.log(FbName);
      localStorage.setItem("name", FbName)
      localStorage.setItem("photo", FbImmage)
      localStorage.setItem("email", FbEmail)
      localStorage.setItem("isLoggedIn", true)
      this.setState({name: FbName, photo:FbImmage, isLoggedIn:true})
      window.location = '/' 
    }

    const responseGoogle = (response) => {

      console.log(response.profileObj);
      const googleName = response.profileObj.name;
      const googleImmage = response.profileObj.imageUrl;
      const googleEmail = response.profileObj.email;
      console.log(googleName);
      localStorage.setItem("name", googleName)
      localStorage.setItem("photo", googleImmage)
      localStorage.setItem("email", googleEmail)
      localStorage.setItem("isLoggedIn", true)
      this.setState({name: googleName, photo:googleImmage, isLoggedIn:true})
      window.location = '/' 
    }
    
     const logout =(response) =>{
      localStorage.removeItem("name")
      localStorage.removeItem("photo")
      localStorage.setItem("isLoggedIn")
      this.setState({name: "", photo:"", isLoggedIn:false})
      window.location = '/' 
     }
     localStorage.getItem("name")
    return (
      <Container fluid>
      <Row><br></br></Row>
      <Row><br></br></Row>
      <Row><br></br></Row> 
      <Row><br></br></Row> 
      <Row><br></br></Row>
      <Row><br></br></Row>
        <Row>
        <Col size="md-5"></Col>
          <Col size="md-3">
          <div id="googleButton" style={{}}></div>
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


 {/* <GoogleLogout
      buttonText="Logout"
      onLogoutSuccess={logout}
    >
    </GoogleLogout> */}
 </div>

 </Col>
 </Row> 
      <Row><br></br></Row>
      <Row><br></br></Row>
      <Row><br></br></Row>
 <Row>
 <Col size="md-4"></Col>
 <Col size="md-4">
 

<div style={{paddingLeft:75}}>
<FacebookLogin
    appId="374590499934008"
    autoLoad={false}
    fields="name,email,picture"
    // onClick={componentClicked}
    callback={responseFacebook}
    //   cssClass="my-facebook-button-class"
    // icon="fa-facebook"
    
    />


</div>
          </Col>
         
         </Row>
     </Container>

     
    );
  }
}





export default login;
