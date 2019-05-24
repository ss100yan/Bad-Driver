

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
import { Home, ExitToApp, GetApp, SettingsPower,Info,Publish } from '@material-ui/icons';
import user from "./user.svg"

import  CustomizedDialogDemo from "../DialogLogin"
import  CustomizedDialogDemo3 from "../DialogAbout"
import  CustomizedDialogDemo2 from "../DialogAddNewVideo"
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

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
      
       {/* {localStorage.getItem("isLoggedIn")} */}
    </div>
          </Toolbar>
        </AppBar>
        <ClickAwayListener onClickAway={this.handleDrawerClose}>
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
           {/* <img src={localStorage.getItem("photo")} alt="image" style={{height:20 ,width: 20 }} />  */}
          {/* {console.log(localStorage.getItem("photo"))} 
           */}
        
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
        
         

          <ListItem button ><ListItemIcon ><Home /> </ListItemIcon>

                 {/* <ListItemText primary={text} /> */}
                  <a style={{}} href="/">Home</a>
                  </ListItem>
                  <Divider />
              <ListItem button ><ListItemIcon><ExitToApp /> </ListItemIcon>
              <div style={{paddingRight:20}}> <CustomizedDialogDemo /></div>
              </ListItem>

              <Divider />

              <ListItem button >
                <ListItemIcon> <Publish /></ListItemIcon>
                {/* <ListItemText primary={text} /> */}
                <div style={{}}> <CustomizedDialogDemo2 /></div>
                {/* <a class="" href="/add">Add New</a> */}
              </ListItem>
         
           
    
         
          <Divider  />

          <ListItem button >
                <ListItemIcon> <Info /></ListItemIcon>
                {/* <ListItemText primary={text} /> */}
                <div style={{}}> <CustomizedDialogDemo3 /></div>
                {/* <a class="" href="/add">Add New</a> */}
              </ListItem>
        
         <Divider  />                     
            
              <ListItem button Loguot >
                <ListItemIcon><SettingsPower /> </ListItemIcon>
                {/* <ListItemText Login/> */}
                <a href="#" onClick={handleClick}> Sign Out</a>
              </ListItem>
       
       
        
         
        </Drawer>
        </ClickAwayListener>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          {/* <Typography paragraph>
          
          </Typography>
          <Typography paragraph>
         
          </Typography> */}
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