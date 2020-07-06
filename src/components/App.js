import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Transition, TransitionGroup , CSSTransition } from 'react-transition-group';
import { play, exit } from './Transition/Transition';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';
import About from './About/About';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          {/* <Route render={({ location }) => {
            const { pathname, key } = location; */}

            {/* return ( */}
              {/* // <TransitionGroup component={null}>
              //   <CSSTransition key={location.key} in={true} classNames="slide-in">
              //   {/* <Transition
              //     key={key}
              //     appear={true}
              //     onEnter={(node, appears) => play(pathname, node, appears)}
              //     onExit={(node, appears) => exit(node, appears)}
              //     timeout={{enter: 750, exit: 150}}
              //   > */}
                  
                    <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/about" component={About}/>
                      <Route path="/contact" component={Contact} />
                    </Switch>
              {/* //   </CSSTransition>
              // {/* //   </Transition> */}
              {/* // </TransitionGroup>
            )
          }}/> */} 
          <Footer/> 
        </div>
      </Router>
    )
  }

}

export default App;
