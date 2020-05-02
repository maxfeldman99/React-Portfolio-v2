import React, {Component} from 'react';
import Icon from '@ant-design/icons';
import {
 Button,Layout,Divider
} from 'antd';
import {useHistory,withRouter,useLocation } from 'react-router-dom'
import MarkdownContainer from './MarkdownContainer';
import {
  AwesomeButton
} from 'react-awesome-button';



const { Header, Footer, Sider, Content } = Layout;

function ProjectDataContainer(props)  {
  const location = useLocation();
  console.log(location)
  const history = useHistory();

  
  console.log('inside ProjectDataContainer ' + location.state.detail)

  function handleRouteClick() {
    history.push("/Home");
  }

    return (

      <Layout>
        <Header>

        <AwesomeButton type="primary"  size="medium"  onPress={next => {
                handleRouteClick()
              }}>Go Back Home</AwesomeButton>
      
        </Header>
        <Content>
          <div class="container">
        {console.log('before sending props' + location.state.detail)}
        <MarkdownContainer data={location.state.detail}></MarkdownContainer>
        </div>
        </Content>
      </Layout>
      
    )
}

export default ProjectDataContainer