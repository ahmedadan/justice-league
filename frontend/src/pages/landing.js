import React from 'react';
import {Button} from '@material-ui/core';

export default
class LandingPage extends React.Component {
    render() {
      
      return (
        <div style={{justifyContent: 'center', display: "flex", height: "1000px", backgroundImage: "linear-gradient(#240D53, #F2F6FF)"}}>
          <a style={{color: "#FFFFFF"}}>COVID Passport</a>
          <div style={{backgroundColor: "#F3F6FF", "height": "50%"}}>

          </div>
          <div style={{align: "center", position: "absolute", top: "40%", width: "..", height: ".."}}>
          <Button variant="contained" style={{backgroundColor: "#FFFFFF", color: "#00000", borderRadius:15, paddingTop:20, paddingBottom:20, paddingLeft:35, paddingRight:35, margin:10, boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.2)"}} className="ind">I'm an<br />individual</Button>
          <Button variant="contained" style={{backgroundColor: "#FFFFFF", color: "#00000", borderRadius:15, padding:20, margin:10, boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.2)"}} className="org">I'm an<br />organization</Button>
          </div>
          <Button variant="contained" style={{backgroundColor: "#04C49C", position: "absolute", bottom: "10%", borderRadius:8, color: "#FFFFFF", width: "80%"}} >Continue</Button>
        </div>
      );
    }
  }