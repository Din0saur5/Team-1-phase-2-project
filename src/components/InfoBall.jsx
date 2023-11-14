import React from 'react'

const InfoBall = ({id, handleClick}) => {
 




  return (
    <div style={{height:'15%', width:'25%'}}  className='infoball-container' onClick={(e)=>{handleClick(id)}}>
      <img  style={{height:'100%', width:'auto'}}src='/images/infoball.png'/> 
    </div>
  )
}

export default InfoBall
