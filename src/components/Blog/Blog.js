import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import Grid from '@material-ui/core/Grid';
import { Parallax } from 'react-scroll-parallax';
import blog from '../../assets/images/blogimg/bgcrop.png'



const useStyles = makeStyles((theme) => ({
    backgroundImg: {
        backgroundImage: `url(${blog})`,
        height: "33rem",
        // backgroundAttachment: "contain",
        backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "right",
        alignItems: "right",
        margin: "0rem 10rem",
        padding: "0",
    },
    spacer: {
        height: "4rem",
        justifyContent: "center",
    },
    sideSpacer: {
        margin: "1rem 1rem",
    },
    welcome: {
        margin: "6rem 0rem 0rem 2rem",
        fontSize: "2.5rem",
        fontWeight: "bold",
        fontFamily: "Ubuntu",
        backgroundColor: "#dff9fb",
        color: "#000",
    },
    blog: {
        margin: "1rem 0rem 0rem 2rem",
        fontSize: "3rem",
        fontWeight: "bold",
        fontFamily: "Ubuntu",
        backgroundColor: "#dff9fb",
        color: "#000",
        display: "flex",
        justifyContent: "center",
    },
    xclaim: {
        color: "#FF2342",
        
    }
}));
  

const Blog = () => {
    const classes = useStyles();

    return (
        <div>
            <Parallax 
                y={[-20, 20]} tagOuter="figure"
            >
                <div className={classes.backgroundImg}>
                    <div>
                        <p className={classes.welcome}>Welcome to my <br/></p>
                        <p className={classes.blog}>Blog<span className={classes.xclaim}>!</span></p>
                    </div>
                </div>
            </Parallax>
            <Grid container>
                <Grid item xs={1} sm={1} className={classes.spacer}>
                </Grid>

            </Grid>
        </div>
    )
}

export default Blog;
