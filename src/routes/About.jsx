import React from 'react';
import { Link } from 'react-router-dom';
import '../components/countdown.css';
import Carousel from 'react-bootstrap/Carousel';
import CarouselVideos from '../components/CarouselVideos';
import CarouselImages from '../components/CarouselImages.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '../components/Navbar.jsx';
import Countdown from '../components/countdown.jsx';
import '../components/about.css';
import { useAudio } from '../components/AudioContext.jsx'; 

const About = () => {
  const { toggleMusic } = useAudio();

  return (
    <div className="about">
      <NavbarComponent currentPage={"/about"} />
      <div className="about-header">
        <h1>DreamScape: VR Beyond Imagination</h1>
      </div>

      <div className="countdown-container">
        <Countdown currentPage={''}/>
      </div>
    
      <div className="guide-intro">
        <section className="about-section">
          <h2><strong>Explore DreamScape</strong></h2>
            <p> In a near-future world, "DreamScape: Beyond Imagination" offers boundless freedom, allowing users to bring their wildest dreams to life in hyper-realistic virtual reality. The DreamScape Generator turns fantasies into immersive realities, with users crafting their worlds, from fantasy realms to sci-fi cities. As players explore their own dreamscapes and unravel the mysteries of a hidden collective realm, they must band together to uncover the truth behind unintended consequences and navigate a web of stories and challenges.</p>
        </section>
      </div>

      <div className="guide-platform">
        <p>"DreamScape" is a journey of limitless self-discovery, cooperation, and immersive exploration, where your imagination knows no bounds. Craft your dream world, connect with others in a bustling virtual metropolis, and dive into adventures of wonder and mystery. In this boundless realm of dreams, what will you create, and where will your journey take you?.</p>
      </div>

      <div className="guide-video">
        <Carousel>
          <Carousel.Item>
            <CarouselVideos
              text=""
              videoSrc="../../public/videos/VR1.mp4"
            />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselVideos
              text=""
              videoSrc="../../public/videos/VR2.mp4"
             
            />
          </Carousel.Item>
          
        </Carousel>
      </div>

      

      <div className="about-info-1">
        <h3><strong> Endless Freedom </strong></h3>
        <p>
        Our innovative DreamScape Generator empowers users with unparalleled freedom. Unleash your creativity as you transform your wildest fantasies into vivid, interactive experiences. From enchanted fantasy realms to futuristic sci-fi cities, the only limit is the expanse of your imagination.
        </p>

      <h3><strong>
      Craft Your World
      </strong>
      </h3>
      <p>
      Take control of your dreamscape. Craft landscapes, design architecture, and populate your virtual world with the characters of your creation. The DreamScape crafting tools provide the means to shape every detail, ensuring that your dreams unfold exactly as you envision them.
      </p>

      <p></p>

      <h3><strong>
      Unravel Collective Realms
      </strong>
      </h3>
      <p>
      As you delve into your personal dreamscape, discover a hidden collective realm shared by DreamScape enthusiasts. Collaborate with fellow dreamers to uncover the mysteries that lie beneath the surface. The interconnected narratives and challenges will test your imagination and forge bonds with others navigating this fantastical journey.
      </p>
      <p>
          
      </p>

      

    </div>
  
      <div className="guide-screenshot">
          <Carousel>
            <Carousel.Item>
            <CarouselImages 
              text=""
              imageSrc="https://i.pcmag.com/imagery/lineups/0051F70Ae3AgFubSiV7XUoe-1.fit_lim.size_1600x900.v1593113164.jpg" />
          
            </Carousel.Item>
            <Carousel.Item>
            <CarouselImages 
              text=""
              imageSrc="https://www.cnet.com/a/img/resize/b92d26f1a9d9ee8847cda813f760fb0c7b233176/hub/2021/07/20/005cf121-512a-42a8-8abb-39e0045e8af0/demeo-realm-of-rat-king-cards-screenshot.jpg?auto=webp&width=1200" />

            </Carousel.Item>
        </Carousel>
      </div>
      
      <div className="about-info-2">

      <h3><strong>
      Unintended Consequences
      </strong>
      </h3>
      <p>
      Beyond the beauty and marvels of DreamScape, unintended consequences await. Join forces with other players to unveil the truth behind these unforeseen twists. Navigating through a web of stories and challenges, your decisions will shape the destiny of your dreamscape and influence the collective realm.
      </p>
      <p> 

      </p>
      
      <h3><strong>
      Embark on the Journey</strong>
      </h3>
      <p>
      DreamScape is not just a virtual reality; it's a journey into the uncharted territories of your mind. Immerse yourself in an experience where creativity knows no bounds, challenges fuel growth, and connections with others transcend the digital realm.
      </p>

      <h3> <strong>
      Dream Together </strong>
      </h3>
      <p>
      DreamScape beckons dreamers from all walks of life. Whether you're a seasoned explorer or a novice dream-weaver, the collective DreamScape community is a tapestry of diverse stories and visions. Together, we dream, explore, and redefine the very fabric of reality.
      </p>

      <p> <em><strong>
      Join us in DreamScape, where the extraordinary is an everyday occurrence, and the line between dreams and reality is beautifully blurred. Beyond imagination lies a world waiting to be explored—your world.
      </strong></em></p>

    </div>

      <div className="empty-space"></div>

<footer className="about-footer">
  <h6>&copy; {new Date().getFullYear()} JDM Games Inc. All rights reserved.</h6>
</footer>
</div>
);
};

export default About;