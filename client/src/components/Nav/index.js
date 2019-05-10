import React from "react";
import login from "../../pages/login";
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';





function Nav() {

  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    {localStorage.clear()}
    
  }

  // state={
  //   hideLogin:false,
  //   hideLogout:true
  // };
 
  return (

    <nav class="navbar navbar-inverse navbar-dark bg-dark ">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="/">SFL Bad drivers</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="/">Home</a></li>
      <li class="dropdown">
      <a class="" href="/add">Add New</a>
       
      </li>
      {/* <li><a href="#">Page 2</a></li> */}
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a><span class="glyphicon glyphicon-user"></span>{localStorage.getItem("name")}</a></li>
      {/* <img src={localStorage.getItem("photo")} alt="image" style={{height:20 ,width: 20 }} />  */}
      {/* {localStorage.getItem("isLoggedIn")} */}
      <li style={{visibility: "visible"}}><a href="#" onClick={handleClick}  ><span class="glyphicon glyphicon-log-out" ></span> Logout</a></li>
      <li style={{visibility: "visible" }}><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      
    </ul>
  </div>
</nav>
  );
}

export default Nav;