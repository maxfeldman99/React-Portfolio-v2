import React, {Component} from 'react';
import './App.css';
import { render } from '@testing-library/react';
import { getAllRepos } from './client'; // we want to import our function
import {
  Table,
  Avatar,
  Spin,
  Modal,
  Empty
} from 'antd';

import Icon from '@ant-design/icons';
import {ReactComponent as Java} from './assets/svg/javaLogo.svg'
import {ReactComponent as CSS} from './assets/svg/cssLogo.svg'
import {ReactComponent as HTML} from './assets/svg/htmlLogo.svg'
import {ReactComponent as JavaScript} from './assets/svg/javaScriptLogo.svg'
import {ReactComponent as Python} from './assets/svg/pythonLogo.svg'
import {ReactComponent as CPlusPlus} from './assets/svg/cplusplusLogo.svg'
import {ReactComponent as Github} from './assets/svg/github.svg'
import {ReactComponent as test} from './assets/svg/test.svg'
import {ReactComponent as Coding} from './assets/svg/codingLogo.svg'



var dict = {
  'Java': "Java",
  'CSS': "CSS",
  'HTML': "HTML",
  'Jupyter Notebook': "Python",
  'JavaScript': 'JavaScript'

};


class GitHubContainer extends Component{ 

  state = {
    repos: []
  }
  
  componentDidMount (){
    this.fetchRepos();
  }
    
  
  fetchRepos = () => {
    getAllRepos()
      .then(res => res.json()
      .then(repos => {
      console.log(repos);
      this.setState({
        repos
      });
    }));
  }
  
  getComponent = (name) =>{
    switch (name) {
  
      case 'Java':
        return Java
  
      case 'CSS':
        return CSS
  
      case 'JavaScript':
        return JavaScript
  
      case 'HTML':
        return HTML
  
      case 'Jupyter Notebook':
        return Python
  
      case 'Jupyter Notebook':
        return Python
  
      case 'Python':
          return Python
      case 'C++':
          return CPlusPlus
  
      default:
        return Coding
    }
  }
  
  
  
    render(){
  
      const { repos } = this.state;
  
      var dict = {
        'Java': "Java",
        'CSS': "CSS",
        'HTML': "HTML",
        'Jupyter Notebook': "Python",
        'JavaScript': 'JavaScript'
      
      };
  
      
  
      if (repos && repos.length){
      
        const columns = [
          {
            title: 'Repository Name',
            dataIndex: 'name',
            key: 'name'
            
          },
          {
            title: 'Language',
            dataIndex: 'language',
            key: 'language'
          },
          {
            title: '',
            dataIndex: 'avatar',
            responsive: ['lg'],
            render: (text, language) => (
               
              <Icon style={{ fontSize: '44px'}} component={this.getComponent(language.language)}  />
            )
          },
          {
            title: 'Created at',
            dataIndex: 'created_at',
            key: 'created_at',
            responsive: ['lg']
          },
          {
            title: 'Last updated',
            dataIndex: 'updated_at',
            key: 'updated_at',
            responsive: ['lg']
          },
          {
            title: 'Source code',
            dataIndex: 'html_url',
            render: (text, record) => {
              return (
                <Icon style={{ fontSize: '44px'}} component={Github} onClick={(e) => { 
                  e.preventDefault();
                  window.location = record.html_url;    
                 }} />
  
              );
            }
          }  
        ];
      
  
      return (
      
      <Table
      onRow={(record, rowIndex) => {
        return {
          onClick: event => {
            if (1){
              console.log('AAA')
              console.log(rowIndex);
              console.log(record);
            }
          }, // click row
          onDoubleClick: event => {}, // double click row
          onContextMenu: event => {}, // right button click row
          onMouseEnter: event => {}, // mouse enter row
          onMouseLeave: event => {}, // mouse leave row
        };
      }}
        dataSource={repos}
        columns={columns}
        rowKey='name' />
        
         );
  
        
    }
  
    return <Spin size="large" />
   
   }
  }


export default GitHubContainer