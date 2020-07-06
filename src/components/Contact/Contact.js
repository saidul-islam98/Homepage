import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    spacer: {
        height: "4rem",
        justifyContent: "center",
    },
    title: {
        backgroundColor: "F7F7F7",
        height: "10rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        fontSize: "3rem",
        fontFamily: "Ubuntu",
        color: "#000",
    },
    ques: {
        color: "#FF2342",
    }
}));

const Contact = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12} className={classes.spacer}>
                </Grid>
                <Grid item xs={12} className={classes.title}>
                    <h1 className={classes.header}>Have any Questions<span className={classes.ques}>?</span></h1>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact;
