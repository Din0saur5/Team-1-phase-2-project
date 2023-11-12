import React, { useState } from 'react'

const InfoPopUp = ({show, infoData}) => {
    const {title, content} = infoData
   
  return (
    <div className={show? 'ab-text-container':'remove'}>
        <img src='/images/info-box-removebg-preview.png'/>
            <h1 className='info-block'>{title}</h1>
          <p className="info-block">{content}</p>
    </div>
  )
}

export default InfoPopUp
