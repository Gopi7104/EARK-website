import React, { useState } from 'react';
import "./About.css";
import "../../index.css";
import scl_video from "../../asset/video/Video.mp4"

const About = () => {
  const [hovered, setHovered] = useState(false);

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
          <ul>
            <li><span id="abt__card_hgt">Inspire</span> our diverse community of learners to take proactive roles as responsible global citizens.</li>
            <li><span id="abt__card_hgt">Nourish</span> the minds and spirit of our students in a safe, respectful, and caring environment.</li>
            <li><span id="abt__card_hgt">Support</span> students to achieve their individual potential and become well-rounded, life-long learners.</li>
          </ul>
        </div>
      </div>

      
        <div className={`eark__abt_scal_container ${hovered ? "expanded" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={`circle-container ${hovered ? "expanded" : ""}`}>
          <div className="eark__abt_video-container">
            {hovered && (
              <video
                className="eark__abt_video"
                src="your-video-url.mp4" // Replace with your video URL
                autoPlay
                loop
                muted
              />
            )}
             <video className='home_clg_vdo' controls autoPlay muted>
            <source src={scl_video}  type="video/mp4" />
          </video>
          </div>
        </div>
      </div>
      {/* <div className="eark__abt_school-hd">
        <p>We envision a future where we nurture and guide EARK students to become not only knowledgeable individuals but also happy and compassionate global citizens- Head of school. 
        </p>
        <p>- School Head</p>

      </div> */}


    </div>
  );
}

export default About;