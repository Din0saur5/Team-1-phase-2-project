import React from 'react'
import { Link } from 'react-router-dom'
import Plx from "react-plx"
import '../components/home.css'
import '../components/Button.css'
const Home = () => {
  return (
    <div className='home-screen' >
      
       <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 1.9,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 100
        }}
      >
        <img style={{ width: "100%" }} src="/images/bg.png" alt="foreground" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1.1,
                endValue: 1.2,
                property: "scale"
              }
            ]
          }
        ]}
        style={{  
          position: "fixed",
          left: '10%',
          top: 0,
          width: "80%"
        }}
      >
        <img style={{ width: "100%" }} src="/images/hero-v1.png" alt="background" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 850,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "25vw",
          width: "100%",
          zIndex: '99999',
        }}
      >
        <ul className='title'>
           <li><h1 className="neon" data-text="U"><span className="flicker-slow">Dream</span>Scape <pre style={{fontSize:20}}>{`\n`}</pre><span className="flicker-fast">VR</span></h1></li>
            <li style={{display:'flex', margin: 'auto', flexDirection: 'row', justifyContent: 'center'}}>
              <Link to='/about'><div onClick={()=>{window.scrollTo( {top: 0, behavior: 'instant' } ) } }  className='btn style-1'>Learn More</div></Link>
              <Link to='/sign-up'><div onClick={()=>{window.scrollTo( {top: 0, behavior: 'instant' } ) } }  className='btn style-3'>Register</div></Link>
              <Link to='/demo'><div onClick={()=>{window.scrollTo( {top: 0, behavior: 'instant' } ) } }  className='btn style-2'>Try Demo</div></Link>
            </li>
        </ul>
      </Plx>
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%"
        }}
      >
        <div
          style={{
            background: "#000",
            height: "100%"
          }}
        ></div>
      </div>
      <div className='deep-background'></div>
    </div>
  )
}

export default Home
