import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import CarouselVideos from '../components/CarouselVideos';
import CarouselImages from '../components/CarouselImages.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const About = () => {
  return (
    <div className="about">
      
      <div className="guide-top">
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/sign-up">Sign-up</Link>
      </div>
      
      <div className="about-header">
        <h1>DreamScape: VR Beyond Imagination</h1>
      </div>
    
      <div className="guide-intro">
        <section className="about-section">
          <h2>Explore DreamScape</h2>
            <p> In a near-future world, "DreamScape: Beyond Imagination" offers boundless freedom, allowing users to bring their wildest dreams to life in hyper-realistic virtual reality. The DreamScape Generator turns fantasies into immersive realities, with users crafting their worlds, from fantasy realms to sci-fi cities. As players explore their own dreamscapes and unravel the mysteries of a hidden collective realm, they must band together to uncover the truth behind unintended consequences and navigate a web of stories and challenges.
            </p>
        </section>
      </div>

      <div className="guide-video">
        <Carousel>
          <Carousel.Item>
            <CarouselVideos
              text="Sample VR Gameplay Clip #1"
              videoSrc="https://www.youtube.com/embed/OlygkDCGTcM?si=COfodFWrwUIy6E8s&amp;start=0"
            />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselVideos
              text="Sample VR Gameplay Clip #2"
              videoSrc="https://www.youtube.com/embed/hEdzv7D4CbQ?si=e6RuG4BGY3tVDNbn&amp;start=720"
             
            />
          </Carousel.Item>
          {/* Add more Carousel.Item elements as needed */}
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
              imageSrc="https://i.ytimg.com/vi/wDMzJr39Jz8/maxresdefault.jpg" />
          
            </Carousel.Item>
            <Carousel.Item>
            <CarouselImages 
              text="Sample VR Gameplay Screenshot #1"
              imageSrc="https://www.cnet.com/a/img/resize/4b9371ab22a06efb2e0d52b29dd189ce26919e4c/hub/2018/11/30/9b161b11-62a2-4db5-a52d-401695d0ec46/skyrim-vr-screenshot-02-us-12jun17.jpg?auto=webp&width=1200" />
          
            </Carousel.Item>
          {/* Add more Carousel.Item elements as needed */}
        </Carousel>
      </div>
      
      
      <div className="about-fixed-background">
        <div className="footer">
        <p>&copy; {new Date().getFullYear()} Game Launch Web App. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
