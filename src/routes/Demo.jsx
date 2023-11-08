import React from 'react'
import "../components/demo.css"
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse'





const Demo = () => {

   function handleLoad(e){
    console.log(e.target); 
    e.target.classList.add('remove');
    
   }

  return (
    <>
     <video className="movie" src="public/images/load-screen.mp4" onEnded={(e)=>{handleLoad(e)}} autoPlay muted />
     <img className='hud-overlay' src='/images/hud2.png'/>
     <MouseParallaxContainer
                
                className="parallax"
                containerStyle={{
                  position:'relative',
                  width: "100%",
                  height: '100vh',
                  
    
                }}
                globalFactorX={0.7}
                globalFactorY={0.7}
                resetOnLeave
              >
                
                <MouseParallaxChild
                  factorX={0.2}
                  factorY={0.2}
                  style={{
                    margin: '-10%',
                    marginTop: '-5%'
                    
                    
                  }}
                >
                  <img src='/images/demo-look-around.jpeg' alt="" />
                </MouseParallaxChild>
              
                
              </MouseParallaxContainer>
     
    </>
  )
}

export default Demo
//have the video then the div then another div with loading bar