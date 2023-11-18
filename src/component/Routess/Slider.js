import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import "./Slider.css";

const imagesData = [
  {
    image: 'https://images.unsplash.com/photo-1655195194373-616f5a9b93e6?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Slide 1',
    description: 'Description for Slide 1',
  },
  {
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1883&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Slide 2',
    description: 'Description for Slide 2',
  },
  {
    image: 'https://images.unsplash.com/photo-1632707494078-165805600ffc?auto=format&fit=crop&q=80&w=1698&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Slide 3',
    description: 'Description for Slide 3',
  },
  {
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Slide 4',
    description: 'Description for Slide 4',
  },
  {
    image: 'https://images.unsplash.com/photo-1659046196564-25cd9e5a9b1a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF1ZGklMjBhYnR8ZW58MHx8MHx8fDA%3D',
    title: 'Slide 5',
    description: 'Description for Slide 5',
  },
  {
    image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Slide 6',
    description: 'Description for Slide 6',
  },
];

const ImageSlider = () => {
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + imagesData.length) % imagesData.length
    );
  };

  return (
    <div id="todo">
      <br></br>
      <img
        src={imagesData[currentImageIndex].image}
        alt={imagesData[currentImageIndex].title}
        style={{ maxWidth: '100%', maxHeight: '400px' }}
      />
      <br />
      <div>
        <h3>{imagesData[currentImageIndex].title}</h3>
        <p>{imagesData[currentImageIndex].description}</p>
      </div>
      <br />
      <div className="slider-buttons">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevImage} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextImage} />
      </div>
      
    </div>
  );
};

export default ImageSlider;
