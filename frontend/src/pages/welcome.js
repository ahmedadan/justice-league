import React from 'react';
import {Button} from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
//import ButtonGreen from "../components/ButtonGreen.js";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import IndigoWave from "../../assets/IndigoWave.png";
import BackgroundImage from "../BackgroundImage2.png";
import LeagueLogo from "../league_logo.svg";

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
    maxWidth: '500px',
    maxHeight: '600px',
    justify:"center"

  },
  welcome: {
    color: "#322061",
    fontSize: "20px",
    fontWeight: "bold",
    justify:"center"
  },
  title: {
    align: "center",
    color: "#322061",
    fontSize: "30px",
    fontWeight: "bold",
    paddingTop: "10px"
  },
  titleBlock: {
    justifyContent: "center",
    paddingTop: "350px"
  },
  consumer: {
    fontSize: "19px",
    fontWeight: "bold",
    paddingLeft: "5px",
    marginBottom: "2px"
  },
  league: {
    fontSize: "10px",
    color: "#666565",
    paddingTop: "5px",
    marginRight: "-20px"
  },
  leagueLogo: {
    height: "60%",
    width: "150px"
  },
  logoBlock: {
    paddingTop: "100px",
    paddingLeft: "30px;"
  },
  individualButton: {
    backgroundColor: "#322061", 
    color: "#FFFFFF", 
    borderRadius: 30, 
    padding: 20,
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
    width:"250px",
    height: "50px",
    textTransform: "inherit",
  },
  orgButton: {
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
    textTransform: "inherit"
  },
  buttonSpacing: {
    align:"center",
    paddingTop: "100px"
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
        <Grid container xs={8} justify="center" className={classes.titleBlock}>
          <Typography className={classes.welcome}>
            welcome to
          </Typography>
          <Typography className={classes.title}>
            COVID Passport
          </Typography>
        </Grid>

        <Grid container justify="center">
            <Grid item className={classes.buttonSpacing}>
              <Button className={classes.individualButton}>I'm an <a className={classes.consumer}>individual</a></Button>
              <br />
              <Button className={classes.orgButton} >I'm an <a className={classes.consumer}>organization</a></Button>
            </Grid>
        </Grid>

        <Grid container justify="center" className={classes.logoBlock}>
          <Typography className={classes.league}>
            Powered by
          </Typography>
          <img src={LeagueLogo} className={classes.leagueLogo} alt="Logo" />
        </Grid>
    </Grid>

    </div>


  );
}