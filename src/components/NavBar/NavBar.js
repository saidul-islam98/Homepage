import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Toolbar, withStyles, Grid, SwipeableDrawer, AppBar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Resume from '../../assets/Documents/resume.pdf';

const styleSheet = {
    appBar: {
        backgroundColor: "#FFF",
        height: "7rem",
        boxShadow: "none",
        display: "flex",
        justifyContent: "center",
        // position: "fixed",
        // margin: "0",
    },
    sideBarIcon : {
        padding : 0,
        height: "2.3rem",
        width: "2.3rem",
        color : "#203139",
        cursor : "pointer",
    },
    toolbar: {
        height: "5.5rem",
        // backgroundColor: "transparent",
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
        color: "#203139",
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



const pathVariants1 = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            delay: 0.5,
            ease: "easeInOut",
        }
    }
}
const pathVariants2 = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            delay: 1,
            ease: "easeInOut",
        }
    }
}

const pathVariants3 = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            delay: 1.5,
            ease: "easeInOut",
        }
    }
}

const pathVariants4 = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            delay: 2,
            ease: "easeInOut",
        }
    }
}

const pathVariants5 = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            delay: 2.5,
            ease: "easeInOut",
        }
    }
}

const pathVariants6 = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            delay: 3,
            ease: "easeInOut",
        }
    }
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
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid container direction = "row" justify = "space-between" alignItems="center">
            <Link to="/" className={classes.linkTag}>
                <div className={classes.logoDiv}>
                    <motion.svg version="1.0" 
                        xmlns="http://www.w3.org/2000/svg"
                        width="150.000000pt" 
                        height="30.000000pt" 
                        viewBox="0 0 370.000000 89.000000"
                        preserveAspectRatio="xMidYMid meet"
                        whileHover={{ scale: 1.1, x: 0}}>

                        <g transform="translate(0.000000,89.000000) scale(0.100000,-0.100000)"
                         stroke="none">
                        <motion.path fill="#252525" d="M258 710 l5 -70 -77 0 -76 0 0 -40 0 -40 76 0 76 0 -4 -90 -4 -90 43
                        0 43 0 0 90 0 90 90 0 c103 0 96 9 80 -103 -17 -114 -59 -173 -155 -212 l-38
                        -17 35 -35 36 -35 45 26 c107 63 150 143 163 297 l7 79 68 0 69 0 0 40 0 40
                        -70 0 -70 0 0 70 0 70 -44 0 -43 0 5 -70 5 -70 -92 0 -91 0 0 70 0 70 -44 0
                        -43 0 5 -70z"
                        variants={pathVariants1}
                        initial="hidden"
                        animate="visible"
                        />
                        <motion.path fill="#434343" d="M1300 734 c-91 -93 -282 -199 -423 -234 -26 -7 -47 -14 -47 -16 0
                        -11 44 -74 51 -74 13 0 180 65 218 84 l31 17 0 -166 0 -165 45 0 45 0 0 189 0
                        189 90 71 c49 40 92 75 94 80 3 4 -9 22 -27 39 l-33 32 -44 -46z"
                        variants={pathVariants2}
                        initial="hidden"
                        animate="visible"
                        />
                        <motion.path fill="#84898B" d="M1695 465 l0 -295 47 0 46 0 -5 155 -6 155 101 -40 c56 -22 115 -46
                        131 -55 17 -8 34 -15 38 -15 9 0 33 57 33 77 0 13 -72 45 -200 89 l-95 32 2
                        96 2 96 -47 0 -47 0 0 -295z"
                        variants={pathVariants3}
                        initial="hidden"
                        animate="visible"
                        />
                        <motion.path fill="#DE1E39" d="M3278 493 c-3 -257 -2 -269 17 -285 11 -10 24 -17 29 -18 39 -1 277
                        184 276 215 -1 6 -11 23 -24 38 l-23 29 -56 -59 c-31 -32 -75 -69 -97 -82
                        l-41 -23 3 226 3 226 -42 0 -42 0 -3 -267z"
                        variants={pathVariants4}
                        initial="hidden"
                        animate="visible"
                        />
                        <motion.path fill="#FF2342" d="M3090 643 c-1 -197 -25 -286 -102 -367 l-39 -41 28 -22 c15 -13 33
                        -23 39 -23 20 0 85 80 111 137 29 63 41 145 45 306 l3 117 -42 0 -43 0 0 -107z"
                        variants={pathVariants5}
                        initial="hidden"
                        animate="visible"
                        />
                        <motion.path fill="#E6403B" d="M2515 620 l7 -50 -99 0 -98 0 3 -105 3 -105 40 0 39 0 0 70 0 70 149
                        0 149 0 -10 -42 c-24 -110 -100 -192 -206 -225 -31 -9 -59 -18 -61 -20 -7 -5
                        50 -73 62 -73 29 0 141 63 186 105 56 52 93 129 115 238 13 66 13 68 -8 79
                        -12 7 -55 11 -103 9 l-83 -2 0 50 0 51 -46 0 -46 0 7 -50z"
                        variants={pathVariants6}
                        initial="hidden"
                        animate="visible"
                        />
                        </g>
                    </motion.svg>
                </div>
            </Link>
            <MenuIcon
              className = {this.props.classes.sideBarIcon}
              onClick={()=>{this.setState({drawer:true})}} />
          </Grid>
        </Toolbar>
      </AppBar>

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
          <AppBar position="static" className={classes.appBar}>
              <Grid container>
                  <Grid item xs={12}>
                      <Toolbar className={classes.toolbar}>
                          <Link to="/" className={classes.linkTag}>
                              <div className={classes.logoDiv}>
                                <motion.svg 
                                    version="1.0" 
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="150.000000pt" 
                                    height="30.000000pt" 
                                    viewBox="0 0 370.000000 89.000000"
                                    preserveAspectRatio="xMidYMid meet"
                                    whileHover={{ scale: 1.1, x: 0}}>
                                   
                                    <g transform="translate(0.000000,89.000000) scale(0.100000,-0.100000)"
                                    stroke="none">
                                    <motion.path fill="#252525" d="M258 710 l5 -70 -77 0 -76 0 0 -40 0 -40 76 0 76 0 -4 -90 -4 -90 43
                                    0 43 0 0 90 0 90 90 0 c103 0 96 9 80 -103 -17 -114 -59 -173 -155 -212 l-38
                                    -17 35 -35 36 -35 45 26 c107 63 150 143 163 297 l7 79 68 0 69 0 0 40 0 40
                                    -70 0 -70 0 0 70 0 70 -44 0 -43 0 5 -70 5 -70 -92 0 -91 0 0 70 0 70 -44 0
                                    -43 0 5 -70z"
                                    variants={pathVariants1}
                                    initial="hidden"
                                    animate="visible"
                                    />
                                    <motion.path fill="#434343" d="M1300 734 c-91 -93 -282 -199 -423 -234 -26 -7 -47 -14 -47 -16 0
                                    -11 44 -74 51 -74 13 0 180 65 218 84 l31 17 0 -166 0 -165 45 0 45 0 0 189 0
                                    189 90 71 c49 40 92 75 94 80 3 4 -9 22 -27 39 l-33 32 -44 -46z"
                                    variants={pathVariants2}
                                    initial="hidden"
                                    animate="visible"
                                    />
                                    <motion.path fill="#84898B" d="M1695 465 l0 -295 47 0 46 0 -5 155 -6 155 101 -40 c56 -22 115 -46
                                    131 -55 17 -8 34 -15 38 -15 9 0 33 57 33 77 0 13 -72 45 -200 89 l-95 32 2
                                    96 2 96 -47 0 -47 0 0 -295z"
                                    variants={pathVariants3}
                                    initial="hidden"
                                    animate="visible"
                                    />
                                    <motion.path fill="#DE1E39" d="M3278 493 c-3 -257 -2 -269 17 -285 11 -10 24 -17 29 -18 39 -1 277
                                    184 276 215 -1 6 -11 23 -24 38 l-23 29 -56 -59 c-31 -32 -75 -69 -97 -82
                                    l-41 -23 3 226 3 226 -42 0 -42 0 -3 -267z"
                                    variants={pathVariants4}
                                    initial="hidden"
                                    animate="visible"
                                    />
                                    <motion.path fill="#FF2342" d="M3090 643 c-1 -197 -25 -286 -102 -367 l-39 -41 28 -22 c15 -13 33
                                    -23 39 -23 20 0 85 80 111 137 29 63 41 145 45 306 l3 117 -42 0 -43 0 0 -107z"
                                    variants={pathVariants5}
                                    initial="hidden"
                                    animate="visible"
                                    />
                                    <motion.path fill="#E6403B" d="M2515 620 l7 -50 -99 0 -98 0 3 -105 3 -105 40 0 39 0 0 70 0 70 149
                                    0 149 0 -10 -42 c-24 -110 -100 -192 -206 -225 -31 -9 -59 -18 -61 -20 -7 -5
                                    50 -73 62 -73 29 0 141 63 186 105 56 52 93 129 115 238 13 66 13 68 -8 79
                                    -12 7 -55 11 -103 9 l-83 -2 0 50 0 51 -46 0 -46 0 7 -50z"
                                    variants={pathVariants6}
                                    initial="hidden"
                                    animate="visible"
                                    />
                                    </g>
                                </motion.svg>
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
          </AppBar>
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

