import React from 'react';
import './Curriculam.css';
import CurriculamCard from '../../widgets/Curriculam_card/Curriculam_card';

import { Curriculum } from "../../constants/Curriculum";




function Curriculam() {
  return (
    <div className='curriculum_page'>
      <div className='curriculam_header'>
        <div>Our <span className='curriculum_name'>Curriculam</span> at</div>
        <div> EARK International</div>
        <div>School</div>
      </div>
      <div className='curriculam_page'>
        {/* <div className='curriculum_content'>
          <div className='curriculum_content1'>
            <h1>Edexcel</h1>
            <p>At EARK International School, we are committed to providing our students with a diverse and globally recognized education. As part of this commitment, we proudly offer the Edexcel curriculum, a leading international academic qualification designed to equip students with the skills, knowledge, and understanding they need to succeed in the 21st century.</p>
          </div>
          <div className='curriculum_content2'>
            <h1>Our Edexcel Programs</h1>
            <p>We offer the following Edexcel programs at EARK International School:</p>
            <p>Edexcel International A Levels: Building on the foundation of the International GCSE, the International A Levels offer in-depth study in specific subjects, paving the way for university education and specialized careers.</p>
          </div>
        </div> */}
        <div className='curriculum_content3'>
          <h1>Cambridge Primary Curriculum</h1>
          <p>The Cambridge Primary Curriculum encourages children to be creative and innovative, building their independent thinking skills and allowing them to develop a love of learning. At EARK we give them the advantage of a highly balanced curriculum widely accepted around the globe.</p>
        </div>
        <div className="teachers-grid">
          {Curriculum.map((teacherData, index) => (
            <CurriculamCard
              key={index} 
              name={teacherData.name} 
              image={teacherData.image} 
              description={teacherData.description}
           
            />
          ))}
        </div>


        <div className='curriculum_box1'>
          <h1>Collaboration with parents and community</h1>
          <p>Our curriculum is enriched by strong collaboration with parents and the local community. Regular interactions, workshops, and volunteering opportunities create a vibrant learning ecosystem that extends learning beyond the school walls.</p>
        </div>
        <div className='curriculum_box2'>
          <h1>Technology Integration</h1>
          <p>We embrace technology as a vital part of modern education. Our students have access to cutting-edge tools and resources, enhancing their learning experience and preparing them for the digital age.</p>
        </div>
        <div className='curriculum_box3'>
          <h1>Focus On Sustainability and Global Citizenship</h1>
          <p>We integrate themes of sustainability and global citizenship across our curriculum, encouraging students to think critically about their role in the world and to act responsibly towards the environment and society.</p>
        </div>
        <div className='curriculum_box4'>
        <h1>A Journey Towards Lifelong Learning</h1>
        <p>At EARK International School, our curriculum is more than a set of subjects; it’s a journey towards lifelong learning. We provide a nurturing environment where students are encouraged to explore, question, and discover. Our commitment to excellence, innovation, and holistic development sets us apart as a leading educational institution in Zambia.</p>
        </div>
      </div>
      
    
    
    </div>
  );
}

export default Curriculam;
