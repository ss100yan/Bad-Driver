import React from "react";
import login from "../../pages/login";
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
function Nav() {

  const responseGoogle = (response) => {
    console.log(response.profileObj);
  }
   
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    //   <a className="navbar-brand" href="/">
    //     South Florida Bad Drivers
    //     <br/>
    //     <a className="navbar-brand" href="/">Login</a>
    //     <a className="navbar-brand" href="/add">Add Bad Drivers</a>
    //   </a>
    //         </nav>


    <nav class="navbar navbar-inverse navbar-dark bg-dark ">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="/">SFL Bad drivers</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="/">Home</a></li>
      <li class="dropdown">
      <a class="" href="/add">Add New<span class="caret"></span></a>
       
      </li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li class="dropdown"><a><GoogleLogin
    clientId= "919709182816-2hg84lnsgi74a4stbp4657ofr7a2keq9.apps.googleusercontent.com"

    // "919709182816-ep64esfta7208lf1qmlcrl3aoiftjq63.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    
    cookiePolicy={'single_host_origin'}
   

  
  /><span class="caret"></span></a>
  
  </li>
      {/* <li><GoogleLogout
      buttonText="Logout"
    //   onLogoutSuccess={logout}
    >
    </GoogleLogout></li> */}
      {/* <li><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li> */}
      
    </ul>
  </div>
</nav>
  );
}

export default Nav;
