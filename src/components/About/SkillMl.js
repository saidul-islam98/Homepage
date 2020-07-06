import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../Projects/Hline.css';
import python from '../../assets/images/icons/python2.png';
import pandas from '../../assets/images/icons/pandas.png';
import ml from '../../assets/images/icons/ml.png';
import colab from '../../assets/images/icons/colab.png';
import jupyter from '../../assets/images/icons/jupyter.png';
import watson from '../../assets/images/icons/watson.png';
import tf from '../../assets/images/icons/tf.png';


const useStyles = makeStyles((theme) => ({
    spacer: {
        height: "4rem",
        justifyContent: "center",
    },
    horl: {
        height: "2.5rem",
    },
    sideSpacer: {
        margin: "1rem 1rem",
    },
    title: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Roboto",
        fontSize: "1.2rem",
        fontWeight: "bold",
    },
    header: {
        color: "#000",
    },
    python: {
        height: "7rem",
        width: "6.5rem",
        marginRight: "1.5rem",
    },
    pandas: {
        height: "7rem",
        width: "8.5rem",
        marginRight: "1.5rem",
    },
    ml: {
        height: "7rem",
        width: "9.5rem",
        marginRight: "1.5rem",
    },
    jupyter: {
        height: "7rem",
        width: "6rem",
        marginRight: "1.5rem",
    },
    colab: {
        height: "7rem",
        width: "7em",
        marginRight: "1.5rem",
    },
    watson: {
        height: "7rem",
        width: "7rem",
        marginRight: "1.5rem",
    },
    tf: {
        height: "7rem",
        width: "9rem",
    }
}));

const SkillMl = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12} className={classes.spacer}>
                </Grid>
                <Grid item xs={12} className={classes.title}>
                    <h1 className={classes.header}>Familiar with</h1><br/>
                </Grid> 
                <Grid item xs={1} sm={1} className={classes.sideSpacer}>
                </Grid>
                <Grid item xs={9}>
                    <img src={python} alt="pythonicon" className={classes.python}/>
                    <img src={pandas} alt="pandasicon" className={classes.pandas}/>
                    <img src={ml} alt="mlicon" className={classes.ml}/>
                    <img src={jupyter} alt="jupytericon" className={classes.jupyter}/>
                    <img src={colab} alt="watsonicon" className={classes.colab}/>
                    <img src={watson} alt="watsonicon" className={classes.watson}/> 
                    <img src={tf} alt="tficon" className={classes.tf}/>  
                </Grid>

            </Grid>
        </div>
    )
}


export default SkillMl;
