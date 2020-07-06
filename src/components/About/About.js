import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../Projects/Hline.css';
import Education from './Education';
import SkillMl from './SkillMl';
import Skillweb from './Skillweb';
import MOOC from './MOOC';
import prfsq from '../../assets/images/profile/profileimgsq.png';



const useStyles = makeStyles((theme) => ({
    spacer: {
        height: "4rem",
        justifyContent: "center",
    },
    sideSpacer: {
        margin: "0.5rem 0.5rem",
    },
    horl: {
        height: "2.5rem",
    },
    profileImgSec: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    profileImg: {
        height: "12rem",
        width: "12rem",
        borderRadius: "100%",
    },
    common: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        lineHeight: "170%",
    },
    titleS: { 
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#FF2342",
        fontFamily: "Ubuntu",
    },
    titleI: {
        fontSize: "1.8rem",
        fontWeight: "bold",
        color: "#203139",
        marginLeft: "0.6rem",
        fontFamily: "Ubuntu",
    },
    currentGrid: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        lineHeight: "170%",
        marginTop: "-1.3rem",
    },
    current: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Roboto",
        fontSize: "1rem",
        lineHeight: "200%",
    },
    vl: {
        borderLeft: "0.15rem solid #000",
        height: "1.5rem",
        marginLeft: "0.5rem",
        marginRight: "0.5rem",
    },
}));


// componentDidMount() {
//     this.forceUpdate();
// }


const About = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12} className={classes.spacer}>
                </Grid>
                <Grid item xs={12} className={classes.profileImgSec}>
                    <img src={prfsq} alt="Profileimage" className={classes.profileImg} />
                </Grid>
                <Grid item xs={12} className={classes.spacer}>
                </Grid>
                <Grid item xs={12} className={classes.common}>
                    <p><span className={classes.titleS}>Saidul</span> <br/> 
                        <span className={classes.titleI}>Islam</span>
                    </p> 
                </Grid>
                <Grid item xs={12} className={classes.currentGrid}>
                    <p className={classes.current}>
                        CSE Graduate<span className={classes.vl} />
                        Data Science & ML enthusiast<span className={classes.vl} />
                        Prospective Student
                    </p>
                </Grid>
                <Grid item xs={1} sm={1} className={classes.sideSpacer}>
                </Grid>
                <Grid item xs={10} className={classes.common}>
                    <p className={classes.current}>
                        Hello, I am Mohammed Saidul Islam. I have finished my undergraduate from Department of <br /> 
                        Computer Science from Islamic University of Technology, Gazipur, Bangladesh. I am a <br /> 
                        prospective student currently preparing to pursue my higher studies abroad. My research <br />
                        interest are mainly in the areas of Machine Learning and its applications, applied Data <br />
                        Science and Natural Language Processing. <br/>
                        I am highly motivated and always open to learn new technologies to keep up with the <br/>
                        rest of the world. I have recently started participating in Kaggle competitions and <br/>
                        it opened a new dimension for me to learn about applications of Data Science. I hope <br/>
                        i'll be able to win competitions someday. ¯\_(ツ)_/¯ <br />
                        I like to play video games a lot. I also love to read books, watch Tv series, and <br />
                        I'm trying to do some cooking nowadays and enjoying it a lot.  
                    </p>
                </Grid>
                <Grid item xs={1} sm={1} className={classes.sideSpacer}>
                </Grid>
                <Grid item xs={12} className={classes.spacer}>
                </Grid>
            </Grid>
            
            <Education />
            <SkillMl />
            <Skillweb />
            <MOOC />
        </div>
    )
}

export default About;
