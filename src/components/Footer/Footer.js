import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../Projects/Hline.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import FavoriteIcon from '@material-ui/icons/Favorite';


const useStyles = makeStyles((theme) => ({
    spacer: {
        height: "4rem",
        justifyContent: "center",
    },
    sideSpacer: {
        margin: "1rem 1rem",
    },
    horl: {
        height: "2.5rem",
    },
    connTitle: {
        color: "#203139",
        fontSize: "2rem",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "left",
        alignItems: "left",
    },
    connDesc: {
        marginTop: "1rem",
        fontSize: "1.1rem",
        display: "flex",
        justifyContent: "left",
        alignItems: "left",
    },
    social: {
        display: "flex",
        justifyContent: "left",
        alignItems: "left",
        marginTop: "1.5rem",
    },
    socialiconf: {
        color: "#3B5998",
        marginRight: "1.5rem",
    },
    socialicont: {
        color: "#1A91DA",
        marginRight: "1.5rem",
    },
    socialicone: {
        color: "#7A13F9",
        marginRight: "1.5rem",
    },
    socialicong: {
        color: "#24292E",
        marginRight: "1.5rem",
    },
    socialiconl: {
        color: "#006DBD",
        marginRight: "1.5rem",
    },
    comment: {
        marginTop: "0.3rem",
        marginLeft: "1rem",
        height: "1.8rem",
        width: "1.8rem",
    },
    footer: {
        marginTop: "2rem",
        fontSize: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#203139",
        fontWeight: "bold",
    },
    favicon: {
        color: "#FF2342",
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12} className={classes.spacer}>
                </Grid>
                <Grid item xs={6} sm={1} className={classes.horl}>
                    <hr/>
                </Grid>
                <Grid item xs={12} className={classes.spacer}>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} className={classes.connTitle}>
                    <Grid item xs={1} sm={1} className={classes.sideSpacer}>
                    </Grid>
                    Let's Connect!
                    <EmojiEmotionsIcon className={classes.comment}/>
                </Grid>

                <Grid item xs={12} className={classes.connDesc}>
                    <Grid item xs={1} sm={1} className={classes.sideSpacer}>
                    </Grid>
                    Hey! I am a prospective student currently looking for opportunities to <br />
                    pursue my higher studies abroad. Feel free to get in touch!
                </Grid>
                <Grid item xs={12} className={classes.social}>
                    <Grid item xs={1} sm={1} className={classes.sideSpacer}>
                    </Grid>
                    <a href="https://www.facebook.com/saidulislam001">
                        <FacebookIcon className={classes.socialiconf}/></a>
                    {/* <FacebookIcon className={classes.socialiconf}/> */}
                    <a href="https://twitter.com/SaidulI38926695?s=09">
                        <TwitterIcon className={classes.socialicont}/></a>
                    <a href="mailto:saidulislam143.si@gmail.com?subject=subject&body=body">
                        <EmailIcon className={classes.socialicone}/></a>
                    <a href="https://github.com/saidul-islam98">
                        <GitHubIcon className={classes.socialicong}/></a>
                    <a href="https://www.linkedin.com/in/mohammed-saidul-islam-0331b2135">
                        <LinkedInIcon className={classes.socialiconl}/></a>
                    
                </Grid>
                <Grid item xs={1} sm={1} className={classes.sideSpacer}>
                </Grid>
                <Grid item xs={12} className={classes.footer}>
                    Crafted with <FavoriteIcon className={classes.favicon} /> by Saidul Islam
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;
