import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import "../../index.css";

// Importing images
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

// Array of images to rotate in the gallery
const images = [
  galleryone, gallerytwo, gallerythree, galleryfour, galleryfive,
  gallerysix, galleryseven, galleryeight, gallerynine, galleryten
];

const About = () => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  // State for rotating gallery images
  const [evenImages, setEvenImages] = useState([galleryone, gallerythree, galleryfive, galleryseven, gallerynine]);
  const [oddImages, setOddImages] = useState([gallerytwo, galleryfour, gallerysix, galleryeight, galleryten]);

  useEffect(() => {
    document.title = "EARK-school";

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
    <div className="eark__abt_main_container">
      <div className="eark__abt_card_holder">
        <div className="eark__abt_card_sml">
          <div className="eark__abt_card_heading">
            <h2>Our Mission</h2>
          </div>
          <p>EARK international school’s vision is to prepare today’s learners to confidently embrace challenges as adaptable, empathetic global citizens who will be active contributors for a more sustainable world.</p>
        </div>

        <div className="eark__abt_card_big">
          <div className="eark__abt_card_heading">
            <h2>Our Vision</h2>
          </div>
          <p>Our mission is to INSPIRE, NOURISH, and SUPPORT our learners.</p>
          <ul className="abt__custom-list">
            <li><span id="abt__card_hgt">Inspire</span> our diverse community of learners to take proactive roles as responsible global citizens.</li>
            <li><span id="abt__card_hgt">Nourish</span> the minds and spirit of our students in a safe, respectful, and caring environment.</li>
            <li><span id="abt__card_hgt">Support</span> students to achieve their individual potential and become well-rounded, life-long learners.</li>
          </ul>
        </div>
      </div>

      {/* 
      <div className={eark__abt_scal_container ${hovered ? "expanded" : ""}}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      > */}
        {/* <div className={circle-container ${hovered ? "expanded" : ""}}> */}
        <div className="eark__abt_video-container">
            {/* {hovered && ( */}
              <iframe
              src="https://drive.google.com/file/d/1zxYwEzE88Co5DslCMhlpXrQ6CA0pC2rB/preview"
              className="eark__abt_video"
              allow="autoplay"
              title="Video"
            ></iframe>
            {/* )} */}
          </div>
        {/* </div> */}
      {/* </div> */}

      <div className="abt__school-head">
        <p>
          We envision a future where we nurture and guide EARK students to become not only knowledgeable individuals but also happy and compassionate global citizens.
        </p>
        <p><span id="abt__aut">- School Head</span></p>
      </div>

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

      
    </div>
  );
};

export default About;
