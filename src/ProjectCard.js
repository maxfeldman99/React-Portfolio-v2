import React, {Component} from 'react';
import {useHistory ,withRouter } from 'react-router-dom'
import {
  AwesomeButton
} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
import { render } from '@testing-library/react';

class GitHubContainer extends Component  {
  constructor(props) {
    super(props)
    console.log('after constructor')
    console.log(this.props)
    this.state = { private: false ,sourceButton : "Source Code",button:"medium"}
  }
    
  componentDidMount (){
    this.initDevice();
    this.initRepo();
  }
    
  
  initRepo = () => {
    console.log("current repo is " + this.props.projectInfo.repo)
    if(this.props.projectInfo.repo=="private"){
      console.log("changed")
      this.setState({
        private: true,
        sourceButton: "private"
      });
    }
  }

  initDevice = () => {
    if(window.innerWidth <= 768){
      console.log("setting to small")
      this.setState({
        button: "small"
      });
    }
    else{
      console.log("screen is big")
    }
  }


    
 
    render(){
      const { location, history } = this.props

      // const history = useHistory();
      
      function handleProjectInfoClick(props) {
        console.log('inside ProjectCard '+ props)
        history.push({pathname:"/Project",state: { detail : props }});
      }
    

      return (
        <section class="card" data-aos={this.props.projectInfo.fade}>
          <img src={require(`../src/assets/images/fulls/${this.props.projectInfo.img}.jpg`)}/>
          <div>
            <div class="card-text-area">
              <h3>{this.props.projectInfo.text1}</h3>
              <p>{this.props.projectInfo.text2}</p>
              {/* <a href="#" class="btn" >Check now</a> */}
            </div>
            <div class="card-footer">
              <AwesomeButton type="primary" ripple={true} size={this.state.button} onPress={next => {
                if(this.props.projectInfo.info.startsWith("http")){
                  window.location = this.props.projectInfo.info
                }else{
                  handleProjectInfoClick(this.props.projectInfo.info)
                }
              }}>Read More</AwesomeButton>

              <AwesomeButton disabled={this.state.private}  type="primary"  size={this.state.button} style={{marginLeft: "25px"}} onPress={next => {
                window.location = this.props.projectInfo.repo
              }}>{this.state.sourceButton}</AwesomeButton>
            </div>
          </div>
      </section>
    )
    }


    
}

export default withRouter(GitHubContainer)