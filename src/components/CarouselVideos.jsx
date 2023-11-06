import React from 'react';

const CarouselVideos = ({ videoSrc, text }) => {
  return (
    <div>
      <div className="video-container">
        <iframe
          width="1200"
          height="500"
          src={videoSrc}
          title={text}
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div className="carousel-caption">
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default CarouselVideos;