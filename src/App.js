import React, {Component} from 'react';
import {BrowserRouter as Router, Switch ,Route,Link,Redirect,HashRouter } from 'react-router-dom';
import {TransitionGroup,CSSTransition } from 'react-transition-group';
import './App.css';
import './style.scss'
import RoundedImage from "react-rounded-image";
import ProjectCard from './ProjectCard';
import Home from './Home';
import GitHubContainer from './GitHubContainer';
import MarkdownContainer from './MarkdownContainer';
import ProjectDataContainer from './ProjectDataContainer'; 



 function App() {


  return(

        
        <HashRouter basename="/">
            <Switch>
                  <Redirect exact from="/" to="Home" />
                  <Route path="/Home" exact component={Home} />
                  <Route path="/Project" exact component={ProjectDataContainer} />
            </Switch>
        </HashRouter>

  );

}

export default App;



