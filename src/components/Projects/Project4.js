import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Hline.css';
import pjimg1 from '../../assets/images/projectimg/weeddetect.jpg';
import keras from '../../assets/images/icons/keras.png';
import tf from '../../assets/images/icons/tf.png';
import python from '../../assets/images/icons/python2.png';
import cnn from '../../assets/images/icons/cnn.png';
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
    tf: {
        height: "3rem",
        width: "4rem",
        marginRight: "2rem",
    },
    keras: {
        height: "3rem",
        width: "5rem",
        marginRight: "2rem",
    },
    cnn: {
        height: "3rem",
        width: "3rem",
        marginRight: "2rem",
    },
    
}));
  

const Project4 = () => {
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
                    <h3 className={classes.title}>Crop weed Detection w/ Deep CNN</h3>
                    <p className={classes.porjectDesc}> 
                        An Image processing project which was mainly done to prepare <br/>
                        for a virtual hackathon. The dataset was an open source dataset of <br/>
                        weed plants stored in Kaggle.
                    </p>
                    
                    <br/> 
                    <p><span className={classes.usedTech}>Used technologies:</span></p>
                    <img src={python} alt="pythonicon" className={classes.python}/>
                    <img src={tf} alt="tensorflowicon" className={classes.tf}/>
                    <img src={keras} alt="kerasicon" className={classes.keras}/>
                    <img src={cnn} alt="cnnicon" className={classes.cnn}/>
                    <br/><br/>
                    <CustomButton variant="outlined" color="secondary" href="https://github.com/saidul-islam98/Crop-weed-detection-using-Deep-Convolutional-Neural-Networks-">
                        github repo
                    </CustomButton>
                </Grid>
                <Grid item xs={1} sm={1} className={classes.sideSpacer}>
                </Grid>
            </Grid>
        </div>
    )
}

export default Project4;


//https://github.com/saidul-islam98/Crop-weed-detection-using-Deep-Convolutional-Neural-Networks-