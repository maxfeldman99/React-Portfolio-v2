import React, {Component} from 'react';
import {BrowserRouter as Router, Switch ,Route,Link,Redirect } from 'react-router-dom';
import {TransitionGroup,CSSTransition } from 'react-transition-group';
import './App.css';

import RoundedImage from "react-rounded-image";
import ProjectCard from './ProjectCard';
import Home from './Home';
import GitHubContainer from './GitHubContainer';
import MarkdownContainer from './MarkdownContainer';
import ProjectDataContainer from './ProjectDataContainer'; 



 function App() {


  return(

        
        <Router>
            <Switch>
                  <Redirect exact from="/" to="Home" />
                  <Route path="/Home" exact component={Home} />
                  <Route path="/Project" exact component={ProjectDataContainer} />
            </Switch>
        </Router>

  );

}

export default App;



