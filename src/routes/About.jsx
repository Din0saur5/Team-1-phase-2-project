import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import CarouselVideos from '../components/CarouselVideos';
import CarouselImages from '../components/CarouselImages.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '../components/Navbar.jsx';


const About = () => {
  return (
    <div className="about">
      <NavbarComponent /> 
      <div className="about-header">
        <h1>DreamScape: VR Beyond Imagination</h1>
      </div>
    
      <div className="guide-intro">
        <section className="about-section">
          <h2>Explore DreamScape</h2>
            <p> In a near-future world, "DreamScape: Beyond Imagination" offers boundless freedom, allowing users to bring their wildest dreams to life in hyper-realistic virtual reality. The DreamScape Generator turns fantasies into immersive realities, with users crafting their worlds, from fantasy realms to sci-fi cities. As players explore their own dreamscapes and unravel the mysteries of a hidden collective realm, they must band together to uncover the truth behind unintended consequences and navigate a web of stories and challenges.</p>
        </section>
      </div>

      <div className="guide-video">
        <Carousel>
          <Carousel.Item>
            <CarouselVideos
              text="Sample VR Gameplay Clip #1"
              videoSrc="https://www.youtube.com/embed/hEdzv7D4CbQ?si=e6RuG4BGY3tVDNbn&amp;start=720"
            />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselVideos
              text="Sample VR Gameplay Clip #2"
              videoSrc="https://www.youtube.com/embed/OlygkDCGTcM?si=COfodFWrwUIy6E8s&amp;start=0"
             
            />
          </Carousel.Item>
          
        </Carousel>
      </div>


      <div className="guide-platform">
        <p>"DreamScape" is a journey of limitless self-discovery, cooperation, and immersive exploration, where your imagination knows no bounds. Craft your dream world, connect with others in a bustling virtual metropolis, and dive into adventures of wonder and mystery. In this boundless realm of dreams, what will you create, and where will your journey take you?.</p>
      </div>

      <div className="guide-screenshot">
          <Carousel>
            <Carousel.Item>
            <CarouselImages 
              text="Sample VR Gameplay Screenshot #1"
              imageSrc="https://i.pcmag.com/imagery/lineups/0051F70Ae3AgFubSiV7XUoe-1.fit_lim.size_1600x900.v1593113164.jpg" />
          
            </Carousel.Item>
            <Carousel.Item>
            <CarouselImages 
              text="Sample VR Gameplay Screenshot #2"
              imageSrc="https://www.cnet.com/a/img/resize/b92d26f1a9d9ee8847cda813f760fb0c7b233176/hub/2021/07/20/005cf121-512a-42a8-8abb-39e0045e8af0/demeo-realm-of-rat-king-cards-screenshot.jpg?auto=webp&width=1200" />

            </Carousel.Item>
        </Carousel>
      </div>
      
      
      <div className="about-footer">       
        <p>&copy; {new Date().getFullYear()} JDM Games Inc. All rights reserved.</p>

      </div>
    </div>
  );
};

export default About;
