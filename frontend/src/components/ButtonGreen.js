import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { alpha } from '@material-ui/core/styles/colorManipulator';

const ButtonGreen = withStyles({
  root: {
    backgroundColor: "#04C49C",
    borderRadius: 3,
    border: 0,
    color: "white",
    '&:hover': {
        backgroundColor: alpha("#04C49C", 0.6),
    },
    height: 48,
    padding: "0 30px",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

const ButtonGrad = ({ children }) => {
  return <ButtonGreen>{children}</ButtonGreen>;
};

export default ButtonGrad;