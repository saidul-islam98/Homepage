import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import tfs from '../../assets/images/icons/TensorFlow in Practice Specialization.png';
import { Button } from '@material-ui/core';


const CustomButton = withStyles({
    root: {
        backgroundColor: "transparent",
        border: "1px solid #FF5D69",
        marginLeft: "1rem",
        borderRadius: "0",
        color: "#19191B",
        cursor: "pointer",
        fontSize: ".80rem",
        fontWeight: "600",
        letterSpacing: ".1rem",
        lineHeight: "inherit",
        whiteSpace: "nowrap",
        overflow: "hidden",
        padding: ".8rem 2rem .7rem",
        position: "relative",
        textTransform: "uppercase",
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        color: "#FF5D69",
        boxShadow: "none",
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#FFF',
        borderColor: '#FF5D69',
      },
      '&:focus': {
        color: "#FF5D69",
        boxShadow: "none",
      },
    },
})(Button);


const useStyles = makeStyles({
  root: {
    height: 240,
    backgroundColor: "#F7F7F7",
  },
  title: {
    paddingLeft: "1rem",
    fontSize: 14,
  },
  italic: {
    fontSize: 12,
    color: "#666",
    margin: "0rem 5rem 0 5rem",
    fontStyle: "italic",
  },
  tfsimg: {
    margin: "0.5rem 0rem 0rem 0.5rem",
  }
});

export default function CertCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <img src={tfs} alt="tfs certification" className={classes.tfsimg}/>
        <p className={classes.title}>TensorFlow in Practice Specialization <br /> 
        <span className={classes.italic}>Issuer: Coursera</span></p>
        <CustomButton variant="outlined" color="secondary" href="https://coursera.org/share/265fdb844edbcc567b9db3d9d1eac7df">
            certification
        </CustomButton>
    </Card>
  );
}
