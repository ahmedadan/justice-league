import React from 'react';
import {Button, Input} from '@material-ui/core';
import { makeStyles } from "@material-ui/core";

//import ButtonGreen from "../components/ButtonGreen.js";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import IndigoWave from "../../assets/IndigoWave.png";
import BackgroundImage from "../BackgroundImage_plain.png";
import Syringe from "../syringe-graphic.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-block',
  },
  container: {
    maxWidth: '300px',
    maxHeight: '100px'
  },
  overall: {
    justifyContent: 'center', 
    display: "flex", 
    height: "1000px", 
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: 'no-repeat',
    maxWidth: '400px',
    maxHeight: '600px',
    justify:"center"
  },
  title: {
    align: "center",
    color: "#6376E5",
    fontSize: "20px",
    fontWeight: "bold",
    paddingTop: "80px",
    paddingRight: "20px"
  },
  titleBlock: {
    paddingTop: "40px",
    justifyContent: "center",
  },
  syringe: {
    width: "120px",
    height: "110px",
    paddingTop: "50px"
  },
  uploadButton: {
    backgroundColor: "#04C49C", 
    color: "#FFFFFF", 
    borderRadius: 30, 
    padding: 20,
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
    width:"250px",
    height: "50px",
    textTransform: "inherit",
  },
  inputBoxes: {
    marginTop: "30px",
    backgroundColor: "#FFFFFF", 
    borderColor: "#322061",
    border: "2px solid",
    color: "#322061", 
    borderRadius:30, 
    padding:20, 
    margin:0, 
    //boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
    width:"250px",
    height: "50px",
    textTransform: "inherit",
  },
  buttonSpacing: {
    align:"center",
  },
  inputSection: {
    paddingTop: "20px"
  },
  continueButtonSpacing: {
    paddingTop: "75px",
    justifyContent: "center",
    paddingBottom: "50px"
  }
}));

export default function LandingPage() {   
  const classes = useStyles();

  return (
    <div justify="center" className={classes.overall}>
      <Grid container justify="center">
        <Grid container justify="center" className={classes.titleBlock}>
          <Typography className={classes.title}>
            Build Profile
          </Typography>
          <img src={Syringe} className={classes.syringe} />
        </Grid>

        <Grid container justify="center" className={classes.inputSection}>
            <Grid item className={classes.buttonSpacing}>
              <Input underlineColor="transparent" className={classes.inputBoxes} placeholder="Name"></Input>
            </Grid>
            <Grid item className={classes.buttonSpacing}>
              <Input className={classes.inputBoxes} placeholder="Email"></Input>
            </Grid>
            <Grid item className={classes.buttonSpacing}>
              <Input className={classes.inputBoxes} placeholder="Phone Number"></Input>
            </Grid>
        </Grid>

        <Grid container justify="center">
            <Grid item className={classes.continueButtonSpacing}>
              <Button className={classes.uploadButton}>Build my profile</Button>
            </Grid>
        </Grid>
    </Grid>

    </div>


  );
}