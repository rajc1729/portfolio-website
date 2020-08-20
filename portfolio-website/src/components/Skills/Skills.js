import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import {
    Typography, Paper, Grid,CircularProgress
  } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // marginTop: 20,
    backgroundColor: '#FAFAFA',
    justifyContent: 'center'
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    alignItems: 'center'
  },

  skillName: {
    fontFamily: 'Questrial',
    fontSize: 35,
    fontWeight: 100,
    color: '#1D1D1F',
    paddingTop: 20,
     
  },

  skillCard: {
      display: "flex",
  },

  language: {
    fontFamily: 'Questrial',
    fontSize: 35,
    fontWeight: 100,
    color: '#1D1D1F',
    paddingTop: 20,
  },

  skillName: {
      paddingLeft: 10
  },
}));



const NameRow = (props) => {
    const classes = styles();


    return ( 
        <React.Fragment>
            {/* <Grid item xs={4}>
              <Paper className={classes.paper}>item</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>item</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>item</Paper>
            </Grid> */}


            {props.skills.map(skill => (
                <Grid key={skill.id} item xs={1} className={classes.skillCard} >
                    <Paper className={classes.paper}>
                <CircularProgress size={30} thickness={13.6} variant="static" value={skill.percentage} />
                <Typography className={classes.skillName}>{skill.name}</Typography>
                </Paper>
              </Grid>
            ))}
          </React.Fragment>
     );
}
 




const Skills = () => {

    const classes = styles();

    const languageSkill= [{ "id": 1, "name": "Python", "percentage": 100 }, 
    { "id": 2, "name": "Javascript", "percentage": 85 },
    { "id": 3, "name": "Java", "percentage": 70 },
    { "id": 4, "name": "C++", "percentage": 70 } ]

    const cloudSkill= [{ "id": 1, "name": "AWS-EC2", "percentage": 100 }, 
    { "id": 2, "name": "AWS-S3", "percentage": 85 },
    { "id": 3, "name": "AWS-Sagemaker", "percentage": 70 },
    { "id": 4, "name": "GCP", "percentage": 70 },
    { "id": 5, "name": "Vercel", "percentage": 70 },
    { "id": 6, "name": "Firebase", "percentage": 70 },
    { "id": 7, "name": "Kubernetes", "percentage": 70 }, ]

    const databseSkill= [{ "id": 1, "name": "Postgre-SQL", "percentage": 100 }, 
    { "id": 2, "name": "MongoDB", "percentage": 85 },
    { "id": 3, "name": "Cloud Firestore ", "percentage": 70 },
    { "id": 4, "name": "Firebase Realtime", "percentage": 70 },
    { "id": 5, "name": "My-sql", "percentage": 70 },
    { "id": 6, "name": "Redis", "percentage": 70 },
    { "id": 7, "name": "Dynamo-DB", "percentage": 70 }, ]

    const webSkill= [{ "id": 1, "name": "Django", "percentage": 100 }, 
    { "id": 2, "name": "React-JS", "percentage": 85 },
    { "id": 3, "name": "Express-JS", "percentage": 70 },
    { "id": 4, "name": "HTML", "percentage": 70 },
    { "id": 5, "name": "CSS", "percentage": 70 },
    { "id": 6, "name": "J-Query", "percentage": 70 },
    { "id": 7, "name": "Material-UI", "percentage": 70 },
    { "id": 8, "name": "Bootstrap", "percentage": 70 } ,
    { "id": 9, "name": "Django REST Framework", "percentage": 70 } ]


    const externalLibrarys= [{ "id": 1, "name": "Scikit-learn,", "percentage": 100 }, 
    { "id": 2, "name": "NumPy", "percentage": 85 },
    { "id": 3, "name": "PyTorch-JS", "percentage": 70 },
    { "id": 4, "name": "TenserFlow", "percentage": 70 }, ]


    const architectureSkills = [{ "id": 1, "name": "REST", "percentage": 100 }, 
    { "id": 2, "name": "MVC", "percentage": 85 },
    { "id": 3, "name": "SPA", "percentage": 70 },
    { "id": 4, "name": "Microservices", "percentage": 70 }, ]

    const toolsSkills = [{ "id": 1, "name": "Git", "percentage": 100 }, 
    { "id": 2, "name": "Swagger", "percentage": 85 },
    { "id": 3, "name": "Postman", "percentage": 70 },
    { "id": 4, "name": "Jira", "percentage": 70 },
    { "id": 5, "name": "Docker", "percentage": 70 }, ]


    

    return ( 
        <div className={classes.root}>
            <Typography gutterBottom variant="h4" component="h4" className={classes.skillName}>
                Skills
            </Typography>

        

        <Grid container spacing={1}>
        <Typography gutterBottom variant="h4" component="h4" className={classes.language}>
            Language
        </Typography>
          <Grid container item xs={12} spacing={1}>
            <NameRow skills={languageSkill}/>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
        <Typography gutterBottom variant="h4" component="h4" className={classes.language}>
            Cloud
        </Typography>
          <Grid container item xs={12} spacing={1}>
            <NameRow skills={cloudSkill}/>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
        <Typography gutterBottom variant="h4" component="h4" className={classes.language}>
        Databases
        </Typography>
          <Grid container item xs={12} spacing={1}>
            <NameRow skills={databseSkill}/>
          </Grid>
        </Grid>


        <Grid container spacing={1}>
        <Typography gutterBottom variant="h4" component="h4" className={classes.language}>
        Web-Tech
        </Typography>
          <Grid container item xs={12} spacing={1}>
            <NameRow skills={webSkill}/>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
        <Typography gutterBottom variant="h4" component="h4" className={classes.language}>
        Libraries
        </Typography>
          <Grid container item xs={12} spacing={1}>
            <NameRow skills={externalLibrarys}/>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
        <Typography gutterBottom variant="h4" component="h4" className={classes.language}>
        Architecture
        </Typography>
          <Grid container item xs={12} spacing={1}>
            <NameRow skills={architectureSkills}/>
          </Grid>
        </Grid>


        <Grid container spacing={1}>
        <Typography gutterBottom variant="h4" component="h4" className={classes.language}>
        Tools
        </Typography>
          <Grid container item xs={12} spacing={1}>
            <NameRow skills={toolsSkills}/>
          </Grid>
        </Grid>


      </div>
     );
}
 
export default Skills;