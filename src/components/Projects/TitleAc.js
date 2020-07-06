import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Hline.css';


const useStyles = makeStyles((theme) => ({
    containerStyle: {
        // backgroundColor: "#F7F7F7",
    },
    spacer: {
        height: "4rem",
        justifyContent: "center",
    },
    horl: {
        height: "2.5rem",
        marginLeft: "5rem",
        marginRight: "5rem",
    },
    title: {
        display: "flex",
        alignItems: "left",
        justifyContent: "left",
        fontFamily: "Roboto",
        fontSize: "1.3rem",
        marginLeft: "5rem",
        marginRight: "5rem",
        // backgroundColor: "#F7F7F7",
    },
    header: {
        color: "#000",
        fontWeight: "bolder",
    }
}));

const TitleAc = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid item xs={12} className={classes.spacer}>
            </Grid>
            <Grid container className={classes.containerStyle}>
                <Grid item xs={12} className={classes.spacer}>
                </Grid>
                <Grid item xs={12} className={classes.title}>
                    <h2 className={classes.header}>Academic Projects</h2>
                </Grid>
                <Grid item xs={6} sm={1} className={classes.horl}>
                    <hr/>
                </Grid>
            </Grid>
        </div>
    )
}

export default TitleAc;


