import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import ibm from '../../assets/images/icons/Applied DS Capstone.png';
import { Button } from '@material-ui/core';


const CustomButton = withStyles({
    root: {
        backgroundColor: "transparent",
        border: "1px solid #FF5D69",
        marginLeft: "0.8rem",
        borderRadius: "0",
        color: "#19191B",
        cursor: "pointer",
        fontSize: ".80rem",
        fontWeight: "600",
        letterSpacing: ".1rem",
        lineHeight: "inherit",
        whiteSpace: "nowrap",
        overflow: "hidden",
        padding: ".7rem 1rem .6rem 1rem",
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
    height: 270,
    width: 270,
    backgroundColor: "#F7F7F7",
    margin: "2rem 0rem",
  },
  title: {
    marginLeft: "2rem",
    marginRight: "0.5rem",
    fontSize: 14,
  },
  italic: {
    fontSize: 12,
    color: "#666",
    margin: "0rem 4rem 0 4rem",
    fontStyle: "italic",
  },
  ibmImg: {
    margin: "0.5rem 3rem 0rem 5rem",
    height: "7rem",
    width: "7rem",
  }
});

export default function AppliedDS() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <img src={ibm} alt="ibm certification" className={classes.ibmImg}/>
        <p className={classes.title}>Applied Data Science Capstone <br /> 
        <span className={classes.italic}>Issuer: Coursera</span></p>
        <CustomButton variant="outlined" color="secondary" href="https://coursera.org/share/f2ffe5520a095b86dbb256a539014541">
            certification
        </CustomButton>
        <CustomButton variant="outlined" color="secondary" href="https://www.youracclaim.com/badges/c62a5129-7b54-4f89-b06b-1093c05f1966/public_url">
            badge
        </CustomButton>
    </Card>
  );
}
