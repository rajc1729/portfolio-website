import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import {
    Card,Avatar, CardActions, CardActionArea, CardMedia, CardContent, Typography, Icon, IconButton, Button
  } from '@material-ui/core';

import bannerImage from '../../assets/image/banner.jpg' 
import rajImage from '../../assets/image/Raj.png'
import noBackgroundRajImage from '../../assets/image/noBackgroundRajImage.png'
import blurBackground from '../../assets/image/blurBackground.png'
import linkedIn from  '../../assets/image/linkedin.svg'

import GitHubIcon from '@material-ui/icons/GitHub';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';

import linkedinRound  from '../../assets/image/linkedin_round.svg'


// @import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');

const styles = makeStyles(theme => ({

    root: {
        backgroundImage: `url(${blurBackground})`,
        // backgroundColor: '#131313',
        backgroundSize: "cover",
        backgroundPosition: "left center",
        height: 748,
        display: 'flex',
    },
	banner: {
        
        
		
    },

    media: {
        height: 400,
        width: 400,
        borderRadius: 400,
        marginLeft: 300,
        marginTop: 100,
      },
    
    name:{
        fontFamily: 'Questrial',
        fontDisplay: 'swap',
        fontSize: 80,
        fontWeight: 400,
        color: '#F5F5F7',
        marginTop: 100,
        marginLeft: 50,
    },

    bio: {
        fontFamily: 'Questrial',
        fontSize: 35,
        fontWeight: 100,
        color: '#F5F5F7',
        marginTop: 50,
        width: '55rem',
        // border: '2px solid red'

    },
    
    icons: {
        marginTop: 20,
        color: '#F5F5F7'
    },

    linkedInIcon: {
        width: "40px", 
        height: "40px"
    },

    container: {
        display: 'flex',
        padding: '0px',
		'&:last-child': {
			padding: '0px'
        },
        alignItems:'center',
        
    },

    email: {
        marginLeft: 20,
        fontFamily: 'Questrial',
        fontSize: 25,
        fontWeight: 100,
    },

    phone: {
        marginLeft: 20,
        fontFamily: 'Questrial',
        fontSize: 25,
        fontWeight: 100,
    },
}));

const Banner = () => {

    const classes = styles();


    return ( 
        <div>
        <Card className={classes.root}>
                
                
                <CardMedia
                className={classes.media}
                image={rajImage}
                title="Photo"
                />

                
       

             <CardContent>

             <Typography gutterBottom variant="h2" component="h2" className={classes.name}>
                Raj Chhatbar
            </Typography>

            <Typography variant="body2" component="p" className={classes.bio}>
            Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected.
          </Typography>
                 
          <div className={classes.icons}>

            <div className={classes.container}>
                <EmailOutlinedIcon/>
                <Typography  component="p" className={classes.email}> chhatbarraj@gmail.com</Typography>
            </div>

            <div className={classes.container}>
                <CallOutlinedIcon/>
                <Typography  component="p" className={classes.phone}> (657)-500-9851</Typography>
            </div>

            
            <Button target="_blank" href="https://github.com/rajc1729" style={{color: "#F5F5F7", width: "50px", height: "50px", marginTop: 10}}>
                <GitHubIcon style={{ width: "40px", height: "40px"}}/>
            </Button>


               
            <Button target="_blank" href="https://www.linkedin.com/in/raj-chhatbar1729/" style={{color: "#F5F5F7",  width: "50px", height: "50px",  marginTop: 10,marginLeft: 10}}>
                <img className={classes.linkedInIcon} src={linkedinRound}/>
            </Button>

            <Button target="_blank" href="https://www.linkedin.com/in/raj-chhatbar1729/" style={{color: "#F5F5F7",  width: "50px", height: "50px",  marginTop: 10,marginLeft: 10}}>
                <Typography>Download Resume</Typography>
            </Button>
                
            </div>

            
             </CardContent>
            </Card>

            


            </div>

        
     );
}
 
export default Banner;