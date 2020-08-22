import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import {
    Card,Avatar, CardActions, CardActionArea, CardMedia, CardContent, Typography, Icon, IconButton, Button, 
  } from '@material-ui/core';

  import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';




// @import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');

const styles = makeStyles(theme => ({

    root: {
        flexGrow: 1,
        // marginTop: 20,
        backgroundColor: '#FAFAFA',
        justifyContent: 'center',
        marginTop:20,
        
    },

    timelineContainer: {
        marginLeft: 0,
        paddingLeft: 0,
        width: 1200,
        padding: '0px',
		'&:last-child': {
			padding: '0px'
		}
    },

    paper: {
        padding: '6px 16px',
      },

}));

const Experience = () => {

    const classes = styles();


    return ( 
        <div className={classes.root}>

        <Typography>Experience</Typography>

        <div className={classes.timelineContainer}>

        <Timeline align="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              2019 - 2021
            </Typography>
            <Typography>Graduate Research Assistant</Typography>
            <Typography>California state university Fullerton</Typography>
            <Typography>Conducting research in combining Artificial Intelligence techniques with Machine learning and Big Data concepts for identify relationships and trends in data that might otherwise not be accessible or identified.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              2019 - 2021
            </Typography>
            <Typography>Software Developer Intern </Typography>
            <Typography>Finary.io</Typography>
            <Typography>Collaborated with MIT and Harvard students to create a MVP startup for stock trading currently on testing at https://finary.now.sh/ .</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              2019 - 2021
            </Typography>
            <Typography>Full stack Software Developer Intern  </Typography>
            <Typography>CollabCafe</Typography>
            <Typography>Developing a responsive front-end web service in React-JS and using Elasticsearch to create a real time match making algorithm for video chat for educational and training industry .</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>

    </div>
        </div>
     );
}
 
export default Experience;