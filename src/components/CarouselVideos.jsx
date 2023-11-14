import React from 'react';

const CarouselVideos = ({ text, videoSrc }) => {
  return (
    <div className="video-container">
      <video controls className='ab-vids'
        src={videoSrc} type="video/mp4" >
        Your browser does not support the video tag.
      </video>
      <div className="carousel-caption">
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default CarouselVideos;
