import React from 'react';
import './Curriculam_card.css';

const Curriculam_card = ({ name, image, onKnowMore }) => {
  return (
    <div className="curri-card">
      <img src={image} alt={name} className="curri-image" />
      <div className="curri-info">
        <div className="curri-name">{name}</div>
      </div>
      {/* <div className="teacher-hover-content">
        <button className="know-more-btn" onClick={onKnowMore}>Know More</button>
      </div> */}
    </div>
  );
};

export default Curriculam_card;
