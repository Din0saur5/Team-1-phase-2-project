import React from 'react';

const CarouselImages = ({ text, imageSrc }) => {
  return (
    <div>
      <img src={imageSrc} alt={text} />
      <p>{text}</p>
    </div>
  );
};

export default CarouselImages;