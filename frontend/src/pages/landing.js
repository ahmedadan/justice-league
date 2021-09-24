import React from 'react';
import {Button} from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import ButtonGreen from "../components/ButtonGreen.js";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import IndigoWave from "../../assets/IndigoWave.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-block',
  },
  container: {
    maxWidth: '500px'
  },
  overall: {
    justifyContent: 'center', 
    display: "flex", 
    height: "1000px", 
    // backgroundImage: "linear-gradient(#240D53, #F2F6FF)"
    backgroundColor: "#F3F6FF",
    maxWidth: '500px',
    justify:"center"

  },
  title: {
    color: "#FFFFFF",
    fontSize: "48px"
  },
  individualButton: {
    backgroundColor: "#FFFFFF", 
    color: "#00000", 
    borderRadius:15, 
    padding: 20,
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
    width:"150px",
    height: "150px"
  },
  orgButton: {
    backgroundColor: "#FFFFFF", 
    color: "#00000", 
    borderRadius:15, 
    padding:20, 
    margin:10, 
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
    width:"150px",
    height: "150px"
  },
  buttonSpacing: {
    paddingTop: "300px"
  },
  continueButtonSpacing: {
    paddingTop: "150px",
    justifyContent: "center",
    paddingBottom: "600px",
  }
}));

export default function LandingPage() {   
  const classes = useStyles();

  return (
    <div justify="center" className={classes.overall}>
      <Grid container justify="center">
        <Grid container justify="center">
          <Typography className={classes.title}>
            COVID Passport
          </Typography>
        </Grid>

        <Grid container justify="center">
            <Grid item xs={6} className={classes.buttonSpacing}>
              <Button className={classes.individualButton}>I'm an<br />individual</Button>
            </Grid>
            <Grid item xs={6} className={classes.buttonSpacing}>
              <Button className={classes.orgButton} >I'm an<br />organization</Button>
            </Grid>
          </Grid>

        

          
          <Grid container justify="center" className={classes.continueButtonSpacing}>
            <ButtonGreen>Continue</ButtonGreen>
          </Grid>
    </Grid>

    </div>


  );
}