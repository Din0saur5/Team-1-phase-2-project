import React, { useState } from 'react'

const InfoPopUp = ({show, infoData}) => {
    const {title, contents} = infoData
    let abDisp = ''
    if(contents.length>1){
  abDisp = contents.map((content, index)=>{
    return <p className={show? `line__${index}`:''} key={index}>{content}</p>
  })
    }
   
  return (
    <div className={show? 'ab-text-container':'remove'}>
        <img src='/images/info-box-removebg-preview.png'/>
            <h1 className='info-block'>{title}</h1>
           
          <div className="info-block">{abDisp}</div>
    </div>
  )
}

export default InfoPopUp
