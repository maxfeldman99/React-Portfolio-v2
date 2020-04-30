import React, {Component} from 'react';
import { useMediaQuery } from 'react-responsive'
import {BrowserRouter as Router, Switch ,Route,Link,useHistory  } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
//import './styles/components/style.less';
//import style from './styles/components/_sider.less';
//import './styles/components/_sider2.less';

import Aos from "aos";
import "aos/dist/aos.css"
//import './layout.css';

import { Layout,Divider,Button} from 'antd';
import Icon from '@ant-design/icons';
import RoundedImage from "react-rounded-image";
import { useState } from "react";

import img1 from '../src/assets/images/fulls/111.jpg';


import bg1 from '../src/assets/images/bg1.jpg';
import bg2 from '../src/assets/images/bg2.jpg';
import MyPhoto from '../src/assets/images/myImage.jfif';
//import github from '../src/assets/images/GitHub-Mark-120px-plus.png';
import {ReactComponent as Github} from '../src/assets/svg/github.svg'
import {ReactComponent as Linkedin} from '../src/assets/svg/linkedin.svg'
import {ReactComponent as Mail} from '../src/assets/svg/gmail.svg'
import {ReactComponent as HeaderSvg} from './assets/svg/header.svg'

import ProjectCard from './ProjectCard';

import {getAllRepos,getRepoUrl} from './client'
import GitHubContainer from './GitHubContainer';
import MarkdownContainer from './MarkdownContainer'

import ProjectDataContainer from './ProjectDataContainer'; 




const { Header, Footer, Sider, Content } = Layout;

const headerText1="Max Feldman ,"
const headerText2="a software developer"
const headerText3="Feel Free to contact me at:"
const headerText4="maxfeldman99@gmail.com"

const longText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, assumenda? Porro debitis, accusamus magni fuga quas qui itaque maxime? Alias natus laudantium quod nesciunt adipisci aspernatur nam, unde dolorem ipsam.'

const text = 'Max </>'

const sbText="An Android app that connects students for shared learning. using the app, the students are able to search for study groups on each course and to receive a notifications for new groups that were created by their followers. connection between the app users are made on the basis of a matching level obtained by several parameters."
const sbInfo="https://www.ynet.co.il/articles/0,7340,L-5447816,00.html"
const soleInfo="https://www.youtube.com/watch?v=LYZDqbo1G3g&t="
const mmuText="A Client-Server project that using a memory management unit to provide access for different clients to store data inside the cache memory. the project was developed using a multi threaded environment and the storage inside the cache is made using paging algorithms. each client can receive information about the storing proccess via GUI."
const soleText="A social Robot that responding to a formal behavioral language. The project contains 3 different units : ev3 robot unit (developed with java (leJos) , mobile smartphone unit (developed with Java) and Tablet (developed with Java)."
const pdText=" the project main goal was to try to create a dataset of planes and airlines logos and to check whether its possible to make a good detection of planes on a runway , to detect what is the current airline that appears on the runway , to count how many planes took off and to know if the runway is clear for takeoff or it is currently occupied by another plane"
const fdText="The project main goal was to try to use the ORL faces - data set and to figure out whether its possible to create a good model that can make correct face predictions ,the project main subject is trying to recognize the right person (40 people in total) , people who wear glasses and finding out if the person is a male or female."
const SiderIconStyle = {fontSize: '44px' ,color: "#FFFFFF", marginLeft:"55px",marginTop:"350px"}


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}


Aos.init({duration: 2000,
          offset:400});

    

          

class Home extends Component {
//


  state = {
    repos: [],
    isFetching: false, // spiner is false by default
    //isAddStudentModalVisible: false
  }
   
  
  componentDidMount (){
    document.title = "Max Feldman"
    this.fetchRepos()
   
  }

  fetchRepos = () =>{
    this.setState({isFetching: true // in order to turn on spiner
    });
    getAllRepos()
    .then(res => res.json()
    .then(repos => {
     // takes the response and grabs the json inside of it
     console.log(repos);
     this.setState({
       repos,
       isFetching: false //in order to turn off spiner
     });
   }))
   .catch(error => {
     console.log(error.error);
     this.setState({
       isFetching: false
     });
   });
  }  


  handleProjectInfoClick = () => {
     this.props.history.push("/Project");
  }

  test = (repoName) => {
    const { repos } = this.state;
    console.log('trying to parse')
    console.log(repos)
    // var array = JSON.parse(repos);
    // console.log(array)
    var matches = repos.filter(function(repo) { return repo.name == repoName });
    console.log(matches)
    let result = matches.map(a => a.html_url);
    console.log(result)
    return result
  }


  render(){
  

    
  return(
    <div>
         

        {/* <div>
          <HeaderSvg style={{
                            fill: " rgba(131,131,240,1), rgba(0,212,255,1) "}}></HeaderSvg>
       </div>  */}
      
      <Layout >
       
      {/* class='sider'
              width="270" style={{
              backgroundImage: `url(${bg2})` */}
      
      <Sider  
            class='sider'
            breakpoint="lg"
            collapsedWidth="0"
            width="270" style={{
            backgroundImage: `url(${bg2})`}}
       >
        <div class="sider-image">
        
        <RoundedImage image={MyPhoto}
              roundedColor=""
              imageWidth="200"
              imageHeight="200"
              roundedSize="20"
            />
        <div class="sider-text">
            <h1><strong>{headerText1}</strong>{headerText2}</h1>
            <h1>{headerText3}</h1>
            <h1><strong>{headerText4}</strong></h1>
        </div>
      </div>
      <div>
      
         <Icon style={SiderIconStyle} component={Linkedin} onClick={(e) => { 
          e.preventDefault();
          window.location = "https://www.linkedin.com/in/max-feldman-97904877/";    
         }} />
         <Icon style={SiderIconStyle} component={Github} onClick={(e) => { 
          e.preventDefault();
          window.location = "https://github.com/maxfeldman99"  
         }} />

      </div>
    
      
      
      </Sider >
      <Layout>
        
        <Header class="main-header">

          <div class="mobile-header-container">
            <div class="header-image" >
              <RoundedImage image={MyPhoto}
                  roundedColor=""
                  imageWidth="200"
                  imageHeight="200"
                  roundedSize="20"

              />
            </div>
            
            <div>
              <div class="mobile-header-title">
                <h2>Max Feldman</h2>
              </div>
              <h1>{headerText2}</h1>
              <h1>{headerText3}</h1>
              <h1><strong>{headerText4}</strong></h1>
            </div>
          </div>
        
          <div class="header-title">
          <h2>Max Feldman</h2>
          <Divider /> 
          </div>
          
         
        
        </Header>
        <Content  >
        <body>
          <main class="container">
            <div class="">
              <div class="main-top-text">
                <p>Hi My name is Max Feldman ,im a tech enthusiast and one of my main hobbies is exploring and studying about new technlogies. </p>
                <p>im always eager to create and to take part in ambitious projects. Currently working as Integration Developer In Assuta Medical Centers.</p>
                <p>I graduated with a B.Sc degree in Computer Science from Holon Institute of Technology.  </p>
                <p>Feel free to browse and check my latest projects</p>
              </div>

              <div class="proj-post">
                <div class="proj-post__img">
                  <img src={img1}alt=""/>
                </div>
                <div class="proj-post__info">
                  <h1 class="proj-post_title">Some Title</h1>
                  <p class="proj-post__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et accusamus, corporis a tempora nihil nemo quod
                  aliquid voluptates quaerat alias itaque aut dicta dolor dolores vel corrupti autem ullam quam!</p>
                  <a href="#" class="proj-post__cta">Read more</a>
                </div>
              </div>
            </div>
            <ProjectCard  projectInfo={{img:'sb' ,text1 : "Study Buddy", text2: sbText,info: sbInfo,fade:"fade-left",repo:"private"}} />
            <ProjectCard  projectInfo={{img:'so' ,text1 : "Sole-JR", text2: soleText,info: soleInfo,fade:"fade-right",repo:this.test("SolEMobileUnit")}}/>
            <ProjectCard  projectInfo={{img:'pd' ,text1 : "Plane Detection", text2: pdText,info:"CV-Planes-Detection",fade:"fade-left" ,repo:this.test("CV-Planes-Detection")}} />
            <ProjectCard  projectInfo={{img:'fd' ,text1 : "Face recognition", text2: fdText,info:"ML-Face-Recognition",fade:"fade-right",repo:this.test("ML-Face-Recognition")}}/>
            <ProjectCard  projectInfo={{img:'mmu' ,text1 : "MMU", text2: mmuText,info:"CacheUnitProject",fade:"fade-left",repo:this.test("CacheUnitProject")}}/>
            <Divider /> 
            <div style={{fontSize: '1.3rem', fontFamily: "Oswald,sans-serif ",textAlign: "center"}}>
              <h2 > Check out my latest projects on GitHub</h2>
            </div>
            

            <GitHubContainer/>
            
          </main>
          
         
        

        </body>
        </Content>
        <Footer class="footer" >
          <div>
            <p>© 2020 Max Feldman. All rights reserved. </p>
          </div>
        </Footer>
      </Layout>
    </Layout>


    <header>
      <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    </header>


  </div>
  );
  }
}

export default Home;