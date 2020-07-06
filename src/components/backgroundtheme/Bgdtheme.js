import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import bg4 from '../../assets/images/background-img/bg4.jpg';



const useStyles = makeStyles((theme) => ({
    backgroundImg: {
        backgroundImage: `url(${bg4})`,
        height: "33rem",
        backgroundPosition: "center",
        marginLeft: "1rem",
        marginRight: "1rem",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#000",  
    },
    desc: {
        paddingTop: "1rem",
        marginRight: "8.5rem",
        fontSize: "1rem",
        lineHeight: "230%",
    }, 
    descSpnName: {
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#203139",
        fontFamily: "Lato",
    },
    descSpn: {
        fontSize: "3rem",
        fontWeight: "bold",
        color: "#7A13F9",
        fontFamily: "Ubuntu",
    },
    descCur: {
        paddingTop: "2rem",
        fontFamily: "Lato",
        fontSize: "1.3rem",
        lineHeight: "130%",
    }
}));
  

const Bgdtheme = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid xs={12} sm={12} className={classes.backgroundImg}>
                        <p className={classes.desc}>
                            <span className={classes.descSpnName}>Hello! I'm</span><br/> 
                            <span className={classes.descSpn}>Saidul</span><br/>
                            <span className={classes.descCur}>I am a <strong>Data Science</strong> and <strong>Machine Learning </strong>
                                 enthusiast. <br/> Currently working as a 
                                part-time lecturer at a university.<br/></span>
                        </p>
                </Grid>
            </Grid>
        </div>
    )
}

export default Bgdtheme;



