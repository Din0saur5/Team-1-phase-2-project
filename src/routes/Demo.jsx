import React, { Fragment, useState } from 'react'
import "../components/demo.css"
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse'
import { Link } from "react-router-dom";




const Demo = () => {
  const [demoPlay, setDemoPlay] = useState(false)


   function handleLoad(e){
    console.log(e.target); 
    e.target.classList.add('remove');
    setDemoPlay(true)
   }
   //add a return to home page function


  return (
    <>
     <video className="movie" src="public/images/load-screen.mp4" onEnded={(e)=>{handleLoad(e)}} autoPlay muted />
      <img className={demoPlay? 'hud-overlay':'remove'} src='/images/hud2.png'/>
     <MouseParallaxContainer
                
                className={demoPlay? 'parallax':'remove'}
                containerStyle={{
                  position:'relative',
                  width: "100%",
                  height: '100vh',
                  
    
                }}
                globalFactorX={0.7}
                globalFactorY={0.7}
                
              >
                
                <MouseParallaxChild
                  factorX={0.2}
                  factorY={0.3}
                  style={{
                    margin: '-10%',
                    marginTop: '-5%',
                    cursor: 'none',
                    height:'100%',
                  }}
                >
                  <img src='/images/demo-look-around.jpeg' alt="" />
                </MouseParallaxChild>
              
                
              </MouseParallaxContainer>
              <Link to='/' style={{position: 'fixed', bottom: 100, zIndex:9999}}>EXIT</Link>
     
    </>
  )
}

export default Demo
//have the video then the div then another div with loading bar