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
        width: 500,
        padding: '0px',
		'&:last-child': {
			padding: '0px'
		}
    },

    paper: {
        width: 300,
    },

}));

const Education = () => {

    const classes = styles();


    return ( 
        <div className={classes.root}>

        <Typography>Educations</Typography>

        <div className={classes.timelineContainer}>

        <Timeline >
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2017
          </Typography>
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot>
            {/* <FastfoodIcon /> */}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        
        
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              St. Xavier's college, Ahmedabad
            </Typography>
            <Typography>Because you need strength</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2018
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot >
            {/* <LaptopMacIcon /> */}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Master of Science (prerequisites): Computer Science 
            </Typography>
            <Typography>Because it&apos;s awesome!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2019
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot >
            {/* <HotelIcon /> */}
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Master of Science: Computer Science 
            </Typography>
            <Typography>Because you need rest</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Exp May-2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot >
            {/* <RepeatIcon /> */}
          </TimelineDot>
        </TimelineSeparator>

        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Repeat
            </Typography>
            <Typography>Because this is the life you love!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>

    </div>
        </div>
     );
}
 
export default Education;