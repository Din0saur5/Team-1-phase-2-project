import React, { Fragment, useState } from 'react'
 import '../components/sandbox.css'
import InfoPopUp from '../components/InfoPopUp'
import InfoBall from '../components/InfoBall'
import Countdown from '../components/Countdown'
import Navbar from '../components/Navbar.jsx'

const Sandbox = () => {
  
  const [show, setShow] = useState(false)
 
  
  
  const [infoData, setInfoData] = useState({
    id: 0,
    title: '',
    content: '',
   })
  
    function handleClick(id){
      if(id === infoData.id){
        setShow(false)
      }else{
        setShow(true)
      }

      fetch(`http://localhost:3000/about/${id}`)
      .then(resp=>resp.json())
      .then(data=>{
       setInfoData(data)
      })
    }

  
  
  
  
    return (
      
    <div className='about-bg'>
      <Navbar/>
      
      <div className='beam-container'>
        <div className='countdown-sand'>
      <Countdown currentPage={''} />
      </div>
        <div className= 'beam'>
        </div>
        
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
