import React from 'react';
import './Teachercard.css';

const Teachercard = ({ name, image, onKnowMore }) => {
  return (
    <div className="teacher-card">
      <img src={image} alt={name} className="teacher-image" />
      <div className="teacher-info">
        <div className="teacher-name">{name}</div>
      </div>
      <div className="teacher-hover-content">
      <div className="teacher-name">{name}</div>
        <button className="know-more-btn" onClick={onKnowMore}>Know More</button>
      </div>
    </div>
  );
};

export default Teachercard;
