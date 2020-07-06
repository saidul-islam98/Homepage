// import React from 'react';
// import { Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Hamburger from '../Hamburger/Hamburger';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import logo from '../../assets/images/logo/saidul.png';
// import Grid from '@material-ui/core/Grid';


// const useStyles = makeStyles((theme) => ({
//     appBar: {
//         backgroundColor: "#fff",
//         color: "#000",
//         display: "flex",
//         height: "5rem",
//     },
//     toolbar: {
//         height: "5.5rem",
//     },
//     spacer: {
//         flex: 1,    
//     },
//     logo: {
//         marginLeft: "4rem",
//         height: "2rem",
//         width: "8rem",
//     },
//     navUl: {
//         listStyle: "none",
//         margin: "0",
//         padding: "0",
//         display: "flex",
//     },
//     navLi: {
//         padding: "0 1rem",
//         fontSize: "1.2rem",
//     },
//     linkTag: {
//         textDecoration: "none",
//         color: "inherit",
//         '&:hover': {
//             color: "#FF2342",
//         }
//     }



// }));
 


// const NavBar = () => {
//     const classes = useStyles();

//     return (
//         <div>
//             {/* <AppBar position="static" className={classes.appBar}> */}
//                 <Grid container>
//                     <Grid item xs={12}>
//                         <Toolbar className={classes.toolbar}>
//                             <Link to="/" className={classes.linkTag}>
//                                 <div className={classes.logoDiv}>
//                                     <img src={logo} alt="logo" className={classes.logo}/>
//                                 </div>
//                             </Link>
//                             <div className={classes.spacer}/>
//                             <div className={classes.navItems}>
//                                 <ul className={classes.navUl}>
//                                     <Link to="/about" className={classes.linkTag}>
//                                         <li className={classes.navLi}>About</li>
//                                     </Link>
//                                     {/* <Link to="/blog" className={classes.linkTag}>
//                                         <li className={classes.navLi}>Blog</li>
//                                     </Link> */}
//                                     <Link to="/resume" className={classes.linkTag}>
//                                         <li className={classes.navLi}>Resume</li>
//                                     </Link>
//                                     <Link to="/contact" className={classes.linkTag}>
//                                         <li className={classes.navLi}>Contact</li>
//                                     </Link>
//                                 </ul>
//                             </div>
//                         </Toolbar>
//                     </Grid>
//                 </Grid>
//                 <Hamburger />
//             {/* </AppBar> */}
//         </div>
//     )
// }

// export default NavBar;





//***********************************************************************



import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Toolbar, withStyles, Grid, SwipeableDrawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../assets/images/logo/saidulrbg.png';
import { Link } from 'react-router-dom';
import Resume from '../../assets/Documents/resume.pdf';

const styleSheet = {
    sideBarIcon : {
        padding : 0,
        height: "2.3rem",
        width: "2.3rem",
        color : "#203139",
        cursor : "pointer",
    },
    toolbar: {
        height: "5.5rem",
    },
    spacer: {
        flex: 1,    
    },
    logo: {
        margin: "1rem 1rem",
        height: "2rem",
        width: "8rem",
    },
    navUl: {
        listStyle: "none",
        margin: "0",
        padding: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    navLi: {
        padding: "1rem 1rem",
        fontSize: "1.3rem",
        fontFamily: "Ubuntu",
        '&:hover': {
            color: "#FF2342",
        },
    },
    linkTag: {
        textDecoration: "none",
        color: "inherit",
    },
    drnavUl: {
        listStyle: "none",
        margin: "0",
        padding: "0",
    },
    drnavLi: {
        padding: "1rem 5rem 1rem 1rem",
        fontSize: "1rem",
        fontFamily: "Ubuntu",
        '&:hover': {
            color: "#FF2342",
        }
    },
    ancor: {
        textDecoration: "none",
        color: "inherit",
        fontSize: "1.3rem",
        '&:hover': {
            color: "#FF2342",
        }
    },
    ancorham: {
        textDecoration: "none",
        color: "inherit",
        fontSize: "1rem",
        '&:hover': {
            color: "#FF2342",
        }
    },
    menu: {
        fontSize: "1.3rem",
        fontFamily: "Ubuntu",
        padding: "1rem 7rem 1rem 1rem",
        textDecoration: "underline",
    },
}

class NavBar extends Component{
  constructor(props){
  super(props);
    this.state = {drawerActivate:false, drawer:false};
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
    this.scrollToRef = React.createRef();
}

componentWillMount(){
    if(window.innerWidth <= 600){
    this.setState({drawerActivate:true});
    }

    window.addEventListener('resize',()=>{
    if(window.innerWidth <= 600){
        this.setState({drawerActivate:true});
    }
    else{
        this.setState({drawerActivate:false})
    }
    });
}

handleScroll = () => {
    this.scrollToRef.current.scrollIntoView({ behavior: "smooth" });
};


//Small Screens
createDrawer(){
  const {classes} = this.props
  return (
    <div>
      {/* <AppBar > */}
        <Toolbar>
          <Grid container direction = "row" justify = "space-between" alignItems="center">
            <Link to="/" className={classes.linkTag}>
                <div className={classes.logoDiv}>
                    <img src={logo} alt="logo" className={classes.logo}/>
                </div>
            </Link>
            <MenuIcon
              className = {this.props.classes.sideBarIcon}
              onClick={()=>{this.setState({drawer:true})}} />
          </Grid>
        </Toolbar>
      {/* </AppBar> */}

      <SwipeableDrawer
        open={this.state.drawer}
        onClose={()=>{this.setState({drawer:false})}}
        onOpen={()=>{this.setState({drawer:true})}}>

        <div className={classes.drnavItems}>
            <ul className={classes.drnavUl}>
                <li className={classes.menu}>Menu</li>
                <Link to="/about" className={classes.linkTag}>
                    <li className={classes.drnavLi}>About</li>
                </Link>
                {/* <Link to="/blog" className={classes.linkTag}>
                    <li className={classes.drnavLi}>Blog</li>
                </Link> */}
                <li className={classes.drnavLi}>
                    <a href={Resume} className={classes.ancorham}>Resume</a>
                </li>

                <Link to="/contact" className={classes.linkTag}>
                    <li className={classes.drnavLi}>Contact</li>
                </Link>
            </ul>
        </div>
    </SwipeableDrawer>

    </div>
  );
}

//Larger Screens
destroyDrawer(){
const {classes} = this.props
  return (
    <div>
          {/* <AppBar position="static" className={classes.appBar}> */}
              <Grid container>
                  <Grid item xs={12}>
                      <Toolbar className={classes.toolbar}>
                          <Link to="/" className={classes.linkTag}>
                              <div className={classes.logoDiv}>
                                  <img src={logo} alt="logo" className={classes.logo}/>
                              </div>
                          </Link>
                          <div className={classes.spacer}/>
                          <div className={classes.navItems}>
                              <ul className={classes.navUl}>
                                  <Link to="/about" className={classes.linkTag}>
                                      <li className={classes.navLi}>About</li>
                                  </Link>
                                  {/* <Link to="/blog" className={classes.linkTag}>
                                      <li className={classes.navLi}>Blog</li>
                                  </Link> */}
                                  <li className={classes.navLi}>
                                    <a href={Resume} className={classes.ancor}>Resume</a>
                                  </li>

                                  <Link to="/contact" className={classes.linkTag}>
                                      <li className={classes.navLi}>Contact</li>
                                  </Link>
                              </ul>
                          </div>
                      </Toolbar>
                  </Grid>
              </Grid>
              {/* <Hamburger /> */}
          {/* </AppBar> */}
      </div>
  )
  }

  render(){
    return(
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

NavBar.propTypes = {
  classes : PropTypes.object.isRequired
};



export default withStyles(styleSheet)(NavBar);