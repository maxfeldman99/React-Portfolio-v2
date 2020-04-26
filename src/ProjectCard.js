import React, {Component} from 'react';
import Icon from '@ant-design/icons';

import img1 from '../src/assets/images/fulls/pd.jpg';
import img2 from '../src/assets/images/fulls/sb.jpg';
import {
 Button
} from 'antd';


import {ReactComponent as Github} from '../src/assets/svg/github.svg'
import {Divider} from 'antd';

function GitHubContainer(props)  {
   
    
    
    return (
        <section class="card" data-aos={props.projectInfo.fade}>
        {/* <img src={img2}/>   */}
        <img src={require(`../src/assets/images/fulls/${props.projectInfo.img}.jpg`)}/>
        <div>
          <h3>{props.projectInfo.text1}</h3>
          <p>{props.projectInfo.text2}</p>
          {/* <a href="#" class="btn" >Check now</a> */}
        <div class="card-footer">
          <Button shape="round" size="large " onClick={(e) => {
            
            window.location = props.projectInfo.info
          }}>Read more</Button>
          <Button style={{marginLeft: "25px"}} shape="round" size="large ">Source code</Button>
          {/* <Icon style={{ fontSize: '44px' ,marginLeft:"100px"}} component={Github} onClick={(e) => { 
            e.preventDefault();
            //window.location = record.html_url;    
          }} /> */}
        </div>
        </div>
      </section>
    )
}

export default GitHubContainer