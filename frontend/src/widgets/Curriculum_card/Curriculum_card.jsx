import React, { useState } from 'react';
import './Curriculum_card.css';

const CardWidget = ({ imageSrc, altText, index, totalCards }) => {
  const [isClicked, setIsClicked] = useState(false);

  // Determine the card's position class
  const getCardClass = () => {
    if (!isClicked) return 'card';

    if (index === Math.floor(totalCards / 2)) {
      return 'card clicked center';
    } else if (index < Math.floor(totalCards / 2)) {
      return 'card clicked left';
    } else {
      return 'card clicked right';
    }
  };

  return (
    <div className={`card-container ${isClicked ? 'clicked' : ''}`}>
      <div
        className={getCardClass()}
        onMouseEnter={() => setIsClicked(true)}
        onMouseLeave={() => setIsClicked(false)}
        onTouchStart={() => setIsClicked(true)}
        onTouchEnd={() => setIsClicked(false)}
        onClick={() => setIsClicked(!isClicked)}
      >
        <img src={imageSrc} alt={altText} className="card-image" />
      </div>
    </div>
  );
};

export default CardWidget;
