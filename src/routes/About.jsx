import React, { Fragment, useState } from 'react'
 import '../components/sandbox.css'
import InfoPopUp from '../components/InfoPopUp.jsx'
import InfoBall from '../components/InfoBall.jsx'
import Countdown from '../components/Countdown.jsx'
import Navbar from '../components/Navbar.jsx'
import '../components/Button.css'
import { useAudio } from '../components/AudioContext.jsx'; 
import Carousel from 'react-bootstrap/Carousel';
import CarouselVideos from '../components/CarouselVideos.jsx';
import CarouselImages from '../components/CarouselImages.jsx';

const Sandbox = () => {
  
  const [show, setShow] = useState(false)
  const [showMovies, setShowMovies] = useState(false)
  const [removeBeam, setRemoveBeam] = useState(false)
  
  const [infoData, setInfoData] = useState({
    id: 0,
    title: '',
    contents: [],
   })
  
    function handleClick(e, id){
      if(show){
       
      if(id === infoData.id){
        setShow(false)
        
      }
      }else{
        setShow(true)
      
    }
      fetch(`http://localhost:3000/about/${id}`)
      .then(resp=>resp.json())
      .then(data=>{
       setInfoData(data)
      })
    }

    let beamRemove = ''
  const displayMovies = () => {
    setShowMovies(!showMovies)
    
  }
 
  
  
    return (
      
    <div className='about-bg'>
      <Navbar currentPage= {"/about"}/>
      <button className='movies-btn btn style-1' onClick={()=>{displayMovies()}}>Movies</button>
      <div  className={showMovies? `beam-container beam-me-up ${beamRemove}`:'beam-container beam-me-down'} >
        <div className='countdown-sand'>
      <Countdown currentPage={''} />
      </div>
        <div className= 'beam'>
        </div>
      </div>
      <img className='screen-hide' src='/images/screen-hide3.png'/>
      <div className='screen-deep'></div>
      <div  className={showMovies? 'movie-container':'remove'}>
      
        <Carousel className='carousel-ab'
         >
          <Carousel.Item >
            <CarouselVideos
              text="Sample VR Gameplay Clip #1"
              videoSrc="../../public/videos/VR1.mp4"
            />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselVideos
              text="Sample VR Gameplay Clip #2"
              videoSrc="../../public/videos/VR2.mp4"
             
            />
          </Carousel.Item>
          
        </Carousel>
      
      </div>
      <div className='pop-up-container A'>
         <InfoBall id={1} handleClick={handleClick}/>
         <InfoBall id={2} handleClick={handleClick}/>
         <InfoBall id={3} handleClick={handleClick}/>

      </div>
      <div className='pop-up-container B'>
         <InfoBall id={4} handleClick={handleClick}/>
         <InfoBall id={5} handleClick={handleClick}/>
         <InfoBall id={6} handleClick={handleClick}/>

      </div>
      <InfoPopUp show={show} infoData={infoData} />
    </div>
    
  )
}

export default Sandbox
