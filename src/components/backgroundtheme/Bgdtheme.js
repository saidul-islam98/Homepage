import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Grid } from '@material-ui/core';
import { motion } from 'framer-motion';
// import { Parallax } from 'react-parallax';
import { Parallax } from 'react-scroll-parallax';
import bg4 from '../../assets/images/background-img/bg4rz.png';



const useStyles = makeStyles((theme) => ({
    backgroundImg: {
        backgroundImage: `url(${bg4})`,
        height: "38rem",
        backgroundAttachment: "contain",
        // marginLeft: "1rem",
        // marginRight: "1rem",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // color: "#000",  
    }, 
    desc: {
        padding: "0",
        margin: "1rem 10rem 0rem 4rem",
        // marginRight: "8.5rem",
        fontSize: "1rem",
        // lineHeight: "230%",
    }, 
    descSpnName: {
        padding: "0",
        margin: "0",
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#203139",
        fontFamily: "Roboto",
    },
    descSpn: {
        padding: "0",
        margin: "0",
        fontSize: "3rem",
        fontWeight: "bold",
        color: "#7A13F9",
        fontFamily: "Ubuntu",
    },
    descCur: {
        padding: "1rem 0rem",
        margin: "0",
        fontFamily: "Roboto",
        fontSize: "1.3rem",
        // lineHeight: "130%",
    },
    boldf: {
        fontWeight: "bold",
    }
}));
  

const Bgdtheme = () => {
    const classes = useStyles();

    return (
        <div>
            {/* <Grid container>
                <Grid xs={12} sm={12} className={classes.backgroundImg}>
                        <motion.p className={classes.desc}
                            initial={{ x:'-100vw' }}
                            animate={{ x:0 }}
                            transition={{ type: 'spring', delay: 0.5, stiffness: 50 }}>
                            <span className={classes.descSpnName}>Hello! I'm</span><br/> 
                            <span className={classes.descSpn}>Saidul</span><br/>
                            <span className={classes.descCur}>I am a <strong>Data Science</strong> and <strong>Machine Learning </strong>
                                 enthusiast. <br/> Currently working as a 
                                part-time lecturer at a university.<br/></span>
                        </motion.p>
                </Grid>
            </Grid> */}

            <Parallax 
                y={[-5, 20]} tagOuter="figure"
            >
                {/* <img src={bg4} /> */}
                <div className={classes.backgroundImg}>
                    <motion.div className={classes.desc}
                            initial={{ x:'-100vw' }}
                            animate={{ x:0 }}
                            transition={{ type: 'spring', delay: 0.5, stiffness: 50 }}>
                        <h2 className={classes.descSpnName}>Hello! I'm</h2>
                        <h1 className={classes.descSpn}>Saidul</h1>
                        <p className={classes.descCur}>An avid learner, as well as a <span className={classes.boldf}>Data Science</span> & <br/> <span className={classes.boldf}>Machine Learning</span> enthusiast</p>
                    </motion.div>
                </div>
            </Parallax>
        </div>
    )
}

export default Bgdtheme;
