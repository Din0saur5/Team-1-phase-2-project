import React from 'react';

const CarouselImages = ({ text, imageSrc }) => {
  return (
    <div>
      <img src={imageSrc} alt={text} />
      <div className="carousel-caption">
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default CarouselImages;

