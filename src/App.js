import React from 'react';
import logo from './logo.svg';
import './App.css';
//import './styles/components/style.less';
//import style from './styles/components/_sider.less';
//import './styles/components/_sider2.less';

import Aos from "aos";
import "aos/dist/aos.css"
//import './layout.css';

import { Layout,Divider } from 'antd';
import RoundedImage from "react-rounded-image";
import { useState } from "react";

import img1 from '../src/assets/images/fulls/01.jpg';
import img2 from '../src/assets/images/fulls/02.jpg';
import img3 from '../src/assets/images/fulls/03.jpg';
import img4 from '../src/assets/images/fulls/04.jpg';
import img5 from '../src/assets/images/fulls/05.jpg';
import bg1 from '../src/assets/images/bg1.jpg';
import bg2 from '../src/assets/images/bg2.jpg';
import MyPhoto from '../src/assets/images/myImage.jfif';


const { Header, Footer, Sider, Content } = Layout;



Aos.init({duration: 2000,
          offset:400});
          

function App() {
  return (
    <div>

      <Layout>
      <Sider
      
      width="350" style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",        
        top: 0,
        left: 0,
        backgroundImage: `url(${bg2})`

      }} >
        <div class="sider-image">
        <RoundedImage image={MyPhoto}
              roundedColor=""
              imageWidth="200"
              imageHeight="200"
              roundedSize="20"
            />
        <div class="sider-text">
            <h1><strong>Max Feldman</strong>, a software developer</h1>
            <h1>Feel Free to contact me at:</h1>
            <h1><strong>maxfeldman99@gmail.com</strong></h1>
        </div>
      </div>
 
      
      </Sider >
      <Layout>
        <Header class="main-header">
        <header >
          
        <h1>About me</h1>
          <p>Hi My name is Max Feldman ,im a tech enthusiast and one of my main hobbies is exploring and studying about new technlogies. im always eager to create and to take part in ambitious projects. Currently working as Integration Developer In Assuta Medical Centers. I graduated with a B.Sc degree in Computer Science from Holon Institute of Technology.  </p>
					<p>Feel free to browse and check my latest projects</p>
        </header>
        </Header>
        <Content>
        <body>
          <main class="container">
            
            <section class="card">
              <img src={img1} alt=""></img>
              <div>
                <h3>Bla bla bla 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, assumenda? Porro debitis, accusamus magni fuga quas qui itaque maxime? Alias natus laudantium quod nesciunt adipisci aspernatur nam, unde dolorem ipsam.</p>
                <a href="#" class="btn" >Check now</a>
              </div>
            </section>
            <Divider />
            <section class="card" data-aos="fade-left">
              <img src={img2} alt=""></img>
              <div>
                <h3>Bla bla bla 2</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, assumenda? Porro debitis, accusamus magni fuga quas qui itaque maxime? Alias natus laudantium quod nesciunt adipisci aspernatur nam, unde dolorem ipsam.</p>
                <a href="#" class="btn" >Check now</a>
              </div>
            </section>
            <Divider />

            <section class="card" data-aos="fade-right">
              <img src={img3} alt=""></img>
              <div>
                <h3>Bla bla bla 3</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, assumenda? Porro debitis, accusamus magni fuga quas qui itaque maxime? Alias natus laudantium quod nesciunt adipisci aspernatur nam, unde dolorem ipsam.</p>
                <a href="#" class="btn" >Check now</a>
              </div>
            </section>
            <Divider />
            <section class="card" data-aos="fade-left">
              <img src={img4} alt=""></img>
              <div>
                <h3>Bla bla bla 4</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, assumenda? Porro debitis, accusamus magni fuga quas qui itaque maxime? Alias natus laudantium quod nesciunt adipisci aspernatur nam, unde dolorem ipsam.</p>
                <a href="#" class="btn" >Check now</a>
              </div>
            </section>
            <Divider />

            <section class="card" data-aos="fade-right">
              <img src={img5} alt=""></img>
              <div>
                <h3>Bla bla bla 5</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, assumenda? Porro debitis, accusamus magni fuga quas qui itaque maxime? Alias natus laudantium quod nesciunt adipisci aspernatur nam, unde dolorem ipsam.</p>
                <a href="#" class="btn" >Check now</a>
              </div>
            </section>
          </main>
          
         
        

        </body>
        </Content>
        <Footer >
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

export default App;
