import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import galleryten from '../../assets/galleryten.jpg';
import gallerynine from '../../assets/gallerynine.jpg';
import galleryeight from '../../assets/galleryeight.jpg';
import galleryseven from '../../assets/galleryseven.jpg';
import gallerysix from '../../assets/gallerysix.jpg';
import galleryfive from '../../assets/galleryfive.jpg';
import galleryfour from '../../assets/galleryfour.jpg';
import gallerythree from '../../assets/gallerythree.jpg';
import gallerytwo from '../../assets/gallerytwo.jpg';
import galleryone from '../../assets/galleryone.jpg';
import "./Aboutus.css";

// Array of images to rotate
const images = [
  galleryone, gallerytwo, gallerythree, galleryfour, galleryfive,
  gallerysix, galleryseven, galleryeight, gallerynine, galleryten
];

const Aboutus = () => {
  const navigate = useNavigate();
  

  const [evenImages, setEvenImages] = useState([galleryone, gallerythree, galleryfive, galleryseven, gallerynine]);
  const [oddImages, setOddImages] = useState([gallerytwo, galleryfour, gallerysix, galleryeight, galleryten]);

  useEffect(() => {
    document.title = "ACCET-FEEDBACK";

    // Rotate even cards
    const evenInterval = setInterval(() => {
      setEvenImages((prevImages) =>
        prevImages.map((img) => images[(images.indexOf(img) + 1) % images.length])
      );
    }, 3000); // Rotate every 3 seconds

    // Rotate odd cards with a delay
    const oddInterval = setTimeout(() => {
      setInterval(() => {
        setOddImages((prevImages) =>
          prevImages.map((img) => images[(images.indexOf(img) + 1) % images.length])
        );
      }, 3000); // Rotate every 3 seconds
    }, 1500); // Delay odd cards rotation by 1.5 seconds

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(evenInterval);
      clearTimeout(oddInterval);
    };
  }, []);

  return (
    <div className="Gallery_whole">
      <div className="Gallery_whole_container">
        <div className="Gallery_heading">
          <h1>Gallery</h1>
        </div>
        <div className="Gallery_grid">
          <div className="card_one">
            <div className="Gallery_top_image">
              <img className="Gallery_image" src={evenImages[0]} alt="card1" />
            </div>
          </div>

          <div className="card_two">
            <div className="Gallery_top_image">
              <img className="Gallery_image" src={oddImages[0]} alt="card2" />
            </div>
          </div>

          <div className="card_three">
            <div className="Gallery_top_image">
              <img className="Gallery_image" src={evenImages[1]} alt="card3" />
            </div>
          </div>

          <div className="card_four">
            <div className="Gallery_top_image">
              <img className="Gallery_image" src={oddImages[1]} alt="card4" />
            </div>
          </div>

          <div className="card_eight">
            <div className="Gallery_top_image">
              <img className="Gallery_image" src={evenImages[2]} alt="card5" />
            </div>
          </div>

          <div className="card_five">
            <div className="Gallery_top_image">
              <img className="Gallery_image" src={oddImages[2]} alt="card6" />
            </div>
          </div>

          <div className="card_six">
            <div className="Gallery_top_image">
              <img className="Gallery_image" src={evenImages[3]} alt="card7" />
            </div>
          </div>

          <div className="card_seven">
            <div className="Gallery_top_image">
              <img className="Gallery_image" src={oddImages[3]} alt="card8" />
            </div>
          </div>

       
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
