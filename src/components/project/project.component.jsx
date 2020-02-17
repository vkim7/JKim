import React from 'react';

import './project.styles.scss';

const Project = ({ title, imageUrl, description, images }) => (
  <div className='projects-container'>
    <h1 className='title'>{title}</h1>
    <h3 className='projects-description'>{description}</h3>
    <img
      src={imageUrl}
      alt=''
      style={{
        width: 1150,
        height: 766,
        margin: 10
      }}
    />
    <div className='images-container'>
      {images.map(image => (
        <div className='projects-image'>
          <img
            src={image}
            alt=''
            style={{
              width: 260,
              height: 340
            }}
          />
        </div>
      ))}
    </div>
  </div>
);

export default Project;
