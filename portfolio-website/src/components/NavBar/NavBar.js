import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import {
  Tabs,Tab, 
} from '@material-ui/core';


const styles = makeStyles(theme => ({

  navContainer: {
     position: 'fixed',
     top: 0,
     display: 'flex',
     height: '30px',
     width:'100%',
     justifyContent: 'center',
     zIndex: 1,
     transitionTimingFunction: 'ease-in',
     transition: 'all 0.5s'

  },

  navContaineFilledr: {
    position: 'fixed',
    top: 0,
    display: 'flex',
    height: '47px',
    width:'100%',
    backgroundColor: '#444444',
    zIndex: 1,
    justifyContent: 'center',

 },

}));



const AntTabs = withStyles({
  root: {
    // borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#FFFFFF',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 150,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    color: '#F8F8F8',
    fontWeight: 300,
    fontFamily: [
      'Questrial',
    ].join(','),
    '&:hover': {
      color: '#FFFFFF',
      opacity: 1,
    },
    '&$selected': {
      color: '#FFFFFF',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#FFFFFF',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);



const NavBar = () => {

  const [show, handleShow] = useState(false);  

  useEffect( ()=>{
    window.addEventListener('scroll', ()=>{
      if (window.scrollY> 100){
        handleShow(true)
      }
      else handleShow(false)
    });
    return ()=> {
      window.removeEventListener("scroll")
    }
  }, [])

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = styles();


  return ( 
    <div className={ show ? classes.navContaineFilledr : classes.navContainer  }>
      <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="About me" />
          <AntTab label="Skills" />
          <AntTab label="Education" />
          <AntTab label="Experience" />
          <AntTab label="Projects" />
        </AntTabs>
    
    </div>
   );
}
 
export default NavBar;