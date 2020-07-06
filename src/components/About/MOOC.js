import React , { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../Projects/Hline.css';
import CertCard from './Card';


const useStyles = theme => ({
    spacer: {
        height: "4rem",
        justifyContent: "center",
    },
    sideSpacer: {
        margin: "1rem 1rem",
    },
    containerStyle: {
        backgroundColor: "#F7F7F7",
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
                    <Grid item xs={1} sm={1} className={classes.sideSpacer}>
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.badgeCard}>
                        <div data-iframe-width="250" data-iframe-height="300" data-share-badge-id="04b45db7-8f9d-4ba0-b020-00d0d5bcf8f1" data-share-badge-host="https://www.youracclaim.com"></div>
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.badgeCard}>
                        <div data-iframe-width="250" data-iframe-height="300" data-share-badge-id="c62a5129-7b54-4f89-b06b-1093c05f1966" data-share-badge-host="https://www.youracclaim.com"></div>
                    </Grid>
                    <CertCard />
                    <Grid item xs={12} className={classes.spacer}>
                    </Grid>
                </Grid>
            </div>
        )
    }
    
}

export default withStyles(useStyles)(MOOC);
