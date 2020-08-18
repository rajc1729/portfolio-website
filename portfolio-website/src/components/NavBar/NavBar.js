import React, { Component } from 'react';

import {
  AppBar, Toolbar, Typography, List, ListItem,
  withStyles, Grid, SwipeableDrawer, Button, Avatar, Tabs, Tab
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { NavLink } from "react-router-dom";





const styles = theme => ({

    navbarCointainer: {
        

        // border: '2px solid red',
        maxWidth: '100%',
        flex:1,
        justify:"space-between"
    },

    projectProposal: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        color: '#161637',
        marginLeft: 25,
        marginTop: 9
      
    },
    
    navbarCointainerItem: {
        width: '800px'
    },


    label: {
      // color: '#FFF000'
      color: 'black'
    },
    indicator: {
    backgroundColor: '#18292D'
    }
    
});

class NavBar extends Component{
  constructor(props){
    super(props);
    this.state = {drawerActivate:false, drawer:false, value: 1};
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
    this.handleChange = this.handleChange.bind(this);


  }

  componentWillMount(){
    if(window.innerWidth <= 900){
      this.setState({drawerActivate:true});
    }



    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 900){
        this.setState({drawerActivate:true});
      }
      else{
        this.setState({drawerActivate:false})
      }

    });
  }



    handleChange = (event, newValue) => {
    console.log("here -> ", newValue)
      this.setState({value:newValue});
    }

  //Small Screens
  createDrawer(){
    return (
      <div>
        <AppBar >
          <Toolbar>
            <Grid container direction = "row" justify = "space-between" alignItems="center">
              <MenuIcon
                className = {this.props.classes.sideBarIcon}
                onClick={()=>{this.setState({drawer:true})}} />

              <Typography color="inherit" variant = "h1">Title</Typography>
              <Typography color="inherit" variant = "h1"></Typography>
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
         open={this.state.drawer}
         onClose={()=>{this.setState({drawer:false})}}
         onOpen={()=>{this.setState({drawer:true})}}>

           <div
             tabIndex={0}
             role="button"
             onClick={()=>{this.setState({drawer:false})}}
             onKeyDown={()=>{this.setState({drawer:false})}}>

            <List className = {this.props.classes.list}>
               <ListItem key = {1} button divider> Option 1 </ListItem>
               <ListItem key = {2} button divider> Option 2 </ListItem>
               <ListItem key = {3} button divider> Option 3 </ListItem>
             </List>

         </div>
       </SwipeableDrawer>

      </div>
    );
  }

  //Larger Screens
  destroyDrawer(){
    const {classes} = this.props
    return (
        
      <AppBar style={{backgroundColor: '#FFFFFF', boxShadow: '0px 0px 34px rgba(33, 33, 86, 0.06)' , alignItems: 'center', }}>
        
      <Toolbar >

        <Grid container justify="space-between" className={classes.navbarCointainer}>
        
        <Grid item className={classes.navbarCointainerItem}>

            <Tabs
                value={this.state.value}
                // indicatorColor="black"
                textColor="primary"
                onChange={this.handleChange}
                classes={{ indicator: classes.indicator }}
            >
                {/* <Tab label={<span style={{ color: 'white' }}>About</span>} />
                <Tab label={<span style={{ color: 'white' }}>Skills</span>}  />
                <Tab label= {<span style={{ color: 'white' }}>Education</span>}  />
                <Tab label= {<span style={{ color: 'white' }}>Experience</span>}  />
                <Tab label= {<span style={{ color: 'white' }}>Projects</span>}  /> */}

                <Tab classes={{ label: classes.label }} label= "About" /> 
                <Tab classes={{ label: classes.label }}  label= "Skills" /> 
                <Tab classes={{ label: classes.label }} label= "Education" /> 
                <Tab classes={{ label: classes.label }}  label= "Experience" /> 
                <Tab classes={{ label: classes.label }}  label= "Projects" /> 
                
            </Tabs>
            
            </Grid>


        </Grid>
      
      </Toolbar>

      </AppBar>
      
    )
  }

  render(){
    return(
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}




export default withStyles(styles)(NavBar);