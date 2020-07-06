import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Hline.css';
import pjimg1 from '../../assets/images/projectimg/battlofnb.jpg';
import pandas from '../../assets/images/icons/pandas.png';
import numpy from '../../assets/images/icons/numpy.png';
import python from '../../assets/images/icons/python2.png';
import sns from '../../assets/images/icons/seaborn.png';
import foursquare from '../../assets/images/icons/foursquare.png';
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


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    leftSideSpacer: {
        margin: "0.5rem 0.5rem",
    },
    sideSpacer: {
        margin: "0.1rem 0.1rem",
    },
    spacer: {
        height: "4rem",
        justifyContent: "center",
    },
    projectImg: {
        // border: "0.5rem solid #002244",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "22rem",
    },
    desc: {
        marginLeft: "3rem",
        marginRight: "3rem",
        fontFamily: "Roboto",
        fontSize: "1rem",
        color: "#203139",
        // border: "0.5rem solid #002244",
    },
    porjectDesc: {
        position: "relative",
        display: "flex",
        justifyContent: "left",
        alignItems: "left",
        color: "#000",
    },
    title: {
        fontSize: "1.5rem",
        fontWeight: "bold",
    },
    pjimg: {
        borderRadius: "0.5rem",
        width: "100%",
        height: "100%",
        transition: "transform .2s",
        '&:hover': {
            transform: "scale(0.9)",
        }
    },
    usedTech: {
        fontSize: "1.3em",
        fontWeight: "bold",
        color: "#6891C9",
        // color: "#F47169",
    },
    python: {
        height: "3rem",
        width: "3rem",
        marginRight: "2rem",
    },
    pandas: {
        height: "3rem",
        width: "4rem",
        marginRight: "2rem",
    },
    numpy: {
        height: "3rem",
        width: "3rem",
        marginRight: "2rem",
    },
    sns: {
        height: "3rem",
        width: "3rem",
        marginRight: "2rem",
    },
    foursquare: {
        height: "3rem",
        width: "4rem",
        marginRight: "2rem",
    },
    fsquare: {
        fontWeight: "bold",
    }
}));
  

const Project6 = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} className={classes.spacer}>
                </Grid>
                <Grid item xs={1} sm={1} className={classes.leftSideSpacer}>
                </Grid>
                <Grid item xs={10} sm={5} className={classes.projectImg}>
                    <img src={pjimg1} alt="placeholder" className={classes.pjimg} />
                </Grid>
                {/* <Grid item xs={1} sm={1} className={classes.sideSpacer}>
                </Grid> */}
                <Grid item xs={10} sm={5} className={classes.desc}>
                    <h3 className={classes.title}>Battle of The Neighborhoods w/ Visualization</h3>
                    <p className={classes.porjectDesc}> 
                        Another IBM MOOC(Data Science Professional Certificate) project in <br/>
                        which the goal was help a business entrepreneur to find a suitable spot <br/>
                        for his business to establish. Here, Foursquare api is used to find all <br/>
                        types of businesses in a particular neighborhood.
                    </p>
                    
                    <br/> 
                    <p><span className={classes.usedTech}>Used technologies:</span></p>
                    <img src={python} alt="pythonicon" className={classes.python}/>
                    <img src={pandas} alt="pandasicon" className={classes.pandas}/>
                    <img src={numpy} alt="numpyicon" className={classes.numpy}/>
                    <img src={sns} alt="seabornicon" className={classes.sns}/>
                    <img src={foursquare} alt="foursquareicon" className={classes.foursquare}/>
                    <br/><br/>
                    <CustomButton variant="outlined" color="secondary" href="https://github.com/saidul-islam98/Battle-of-The-Neighborhoods">
                        github repo
                    </CustomButton>
                </Grid>
                <Grid item xs={1} sm={1} className={classes.sideSpacer}>
                </Grid>
            </Grid>
        </div>
    )
}

export default Project6;


//https://github.com/saidul-islam98/Battle-of-The-Neighborhoods