import React , { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../Projects/Hline.css';
import TFinPractice from './TFinPractice';
import IBMPr from './IBMPr';
import AppliedDS from './AppliedDS';


const useStyles = theme => ({
    containerStyle: {
        backgroundColor: "#F7F7F7",
        display: "flex",
        justifyContent: "center",
    },
    spacer: {
        height: "4rem",
        justifyContent: "center",
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
});

class MOOC extends Component {
    // componentWillMount(){
        // handleCard1 = () => {
            
        // }
    // }

    render (){
        const {classes} = this.props;
        
        return (
            <div>
                <Grid container className={classes.containerStyle}>
                    <Grid item xs={12} className={classes.spacer}>
                    </Grid>
                    <Grid item xs={12} className={classes.title}>
                        <h1 className={classes.header}>MOOC Certifications & Specializations</h1><br/>
                    </Grid> 
                    {/* <Grid item xs={12} className={classes.spacer}>
                    </Grid> */}
                    {/* <Grid item xs={1} sm={1} className={classes.sideSpacer}>
                    </Grid> */}
                    <Grid item xs={12} sm={3} className={classes.badgeCard}>
                        <IBMPr />
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.badgeCard}>
                        <AppliedDS />
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.badgeCard}>
                        <TFinPractice />
                    </Grid>
                    
                    <Grid item xs={12} className={classes.spacer}>
                    </Grid>
                </Grid>
            </div>
        )
    }
    
}

export default withStyles(useStyles)(MOOC);
