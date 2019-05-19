// import React from "react";
// import login from "../../pages/login";
// import GoogleLogin from 'react-google-login';
// import { GoogleLogout } from 'react-google-login';





// function Nav() {

//   function handleClick(e) {
//     e.preventDefault();
//     console.log('The link was clicked.');
//     localStorage.clear()
//       window.location = '/'
    
//   }

//   // state={
//   //   hideLogin:false,
//   //   hideLogout:true
//   // };
 
//   return (

//     <nav class="navbar navbar-inverse navbar-dark bg-dark ">
//   <div class="container-fluid">
//     <div class="navbar-header">
//       <a class="navbar-brand" href="/">SFL Bad drivers</a>
//     </div>
//     <ul class="nav navbar-nav">
//       <li class="active"><a href="/">Home</a></li>
//       <li class="dropdown">
//       <a class="" href="/add">Add New</a>
       
//       </li>
//       {/* <li><a href="#">Page 2</a></li> */}
//     </ul>
//     <ul class="nav navbar-nav navbar-right">
//       <li><a><span class="glyphicon glyphicon-user"></span>{localStorage.getItem("name")}</a></li>
//       {/* <img src={localStorage.getItem("photo")} alt="image" style={{height:20 ,width: 20 }} />  */}
//       {/* {localStorage.getItem("isLoggedIn")} */}
//       <li style={{visibility: "visible"}}><a href="#" onClick={handleClick}  ><span class="glyphicon glyphicon-log-out" ></span> Logout</a></li>
//       <li style={{visibility: "visible" }}><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      
//     </ul>
//   </div>
// </nav>
//   );
// }

// export default Nav;

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Home, ExitToApp, GetApp, SettingsPower } from '@material-ui/icons';
import user from "./user.svg"

// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const styles = {
//   root: {
//     flexGrow: 1,
//   },
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
// };



//   function handleClick(e) {
//     e.preventDefault();
//     console.log('The link was clicked.');
//     localStorage.clear()
//       window.location = '/'
    
//   }

// function ButtonAppBar(props) {
//   const { classes } = props;
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" color="inherit" className={classes.grow}>
//           SFL Bad drivers
//           <a href="/">Home</a>
//           </Typography>
//           <a><span class="glyphicon glyphicon-user"></span>{localStorage.getItem("name")}</a>
//           <Button color="inherit"><a href="#" onClick={handleClick}  ><span class="glyphicon glyphicon-log-out" ></span> Logout</a></Button>
//           <Button color="inherit"><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

// ButtonAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ButtonAppBar);

  function handleClick(e) {
     e.preventDefault();
     console.log('The link was clicked.');
     localStorage.clear()
       window.location = '/'
    
   }

const drawerWidth = 240;

const styles = theme => ({
  root: {
   
    display: 'flex',
  },
  appBar: {
    // backgroundColor:'black',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class PersistentDrawerLeft extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap style={{ flex: 1 }}>
            SFL Bad Drivers
            </Typography>
           
         <div>
      <a style={{marginRight:50 , color:"white"}}><img src={user} style={{height:25,width:25,marginRight:10}} />{localStorage.getItem("name")}</a>
       {/* <img src={localStorage.getItem("photo")} alt="image" style={{height:20 ,width: 20 }} />  */}
       {/* {localStorage.getItem("isLoggedIn")} */}
    </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            
              <ListItem button >
                <ListItemIcon><Home /> </ListItemIcon>
                {/* <ListItemText primary={text} /> */}
                <a href="/">Home</a>
              </ListItem>
              <ListItem button >
                <ListItemIcon> <GetApp /></ListItemIcon>
                {/* <ListItemText primary={text} /> */}
                
                <a class="" href="/add">Add New</a>
              </ListItem>
         
           
    
          </List>
          <Divider />
          <List>
            
              <ListItem button >
                <ListItemIcon><ExitToApp /> </ListItemIcon>
                {/* <ListItemText Login/> */}
                <a href="/login"> Login</a>
              </ListItem>
            
              <ListItem button Loguot>
                <ListItemIcon><SettingsPower /> </ListItemIcon>
                {/* <ListItemText Login/> */}
                <li><a href="#" onClick={handleClick}  > Logout</a></li>
              </ListItem>
       
       
          </List>
          
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Typography paragraph>
          
          </Typography>
          <Typography paragraph>
         
          </Typography>
        </main>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);