import React from 'react';
import SchoolIcon from '@material-ui/icons/School';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../Projects/Hline.css';

const useStyles = makeStyles((theme) => ({
    containerStyle: {
        backgroundColor: "#F7F7F7",
    },
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
    education: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Roboto",
        fontSize: "1.2rem",
        fontWeight: "bold",
    },
    interest: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Roboto",
        fontSize: "1.2rem",
        fontWeight: "bold",
    },
    edList: {
        display: "flex",
        listStyle: "none",
        margin: "0",
        padding: "0",
    },
    IUT: {
        color: "#676F7F",
    },
    inList: {
        listStyle: "none",
        margin: "0",
        padding: "0",
    },
    schoolIcon:{
        color: "#FF2342",
    },
    ideaIcon: {
        color: "#FF2342",
        height: "1.3rem",
    },
    header: {
        color: "#203139",
    }
}));

const Education = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container className={classes.containerStyle}>
                <Grid item xs={12} className={classes.spacer}>
                </Grid>
                <Grid item xs={1} sm={1} className={classes.sideSpacer}>
                </Grid>
                <Grid item xs={12} sm={4} className={classes.education}>
                    <div>
                        <h1 className={classes.header}>Education</h1>
                        <ul className={classes.edList}>
                            <li><SchoolIcon className={classes.schoolIcon}/> <strong>BSc in Computer Science <br/> and Engineering, 2019</strong> <br />
                                <span className={classes.IUT}>Islamic University of Technology</span>
                            </li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={1} sm={1} className={classes.sideSpacer}>
                </Grid>
                <Grid item xs={12} sm={4} className={classes.interest}>
                    <div>
                        <h1 className={classes.header}>Interests</h1>
                        <ul className={classes.inList}>
                            <li><EmojiObjectsIcon className={classes.ideaIcon}/> Data Science</li>
                            <li><EmojiObjectsIcon className={classes.ideaIcon}/> Machine Learning</li>
                            <li><EmojiObjectsIcon className={classes.ideaIcon}/> Natural Language Processing</li>
                            <li><EmojiObjectsIcon className={classes.ideaIcon}/> Image Processing</li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={1} sm={1} className={classes.sideSpacer}>
                </Grid>
                <Grid item xs={12} className={classes.spacer}>
                </Grid>
            </Grid>
        </div>
    )
}



export default Education;
