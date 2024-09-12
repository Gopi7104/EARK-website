import React, { useState } from 'react';
import './Teacher.css'; 
import { teacher } from "../../constants/teacher";
import { Teachercard, Modal } from "../../widgets";

const Teacher = () => {
  const [selectedTeacher, setSelectedTeacher] = useState(null); // To store the selected teacher's data
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open/close state

  // Function to open modal with specific teacher data
  const openModal = (teacherData) => {
    setSelectedTeacher(teacherData); // Store the clicked teacher's data
    setIsModalOpen(true); // Open the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="teachers-section">
      <div className="content-container">
        <div className="teachers-header">
          <div className="teacher_heading">
            <h1>Our <span className="highlight">Teachers</span></h1>
          </div>
          <div className="teacher_content">
            <div className="teacher_contentone">
              <p>
                At EARK, we are proud to have a team of exceptional teachers who are passionate about education. Our teachers are well-trained and experienced. They embrace modern teaching strategies, foster a love for learning, promote critical thinking, and make learning an enjoyable experience for our students. We recognize that each student is unique, and we strive to provide personalized learning paths that cater to individual needs and interests. Our dedicated faculty works closely with students to identify their strengths and areas for growth, guiding them towards their full potential.
              </p>
            </div>
          </div>
        </div>
        
        <div className="teachers-grid">
          {teacher.map((teacherData, index) => (
            <Teachercard 
              key={index} 
              name={teacherData.name} 
              image={teacherData.image} 
              description={teacherData.description}
              onKnowMore={() => openModal(teacherData)} // Pass data to openModal function
            />
          ))}
        </div>

        {/* Render Modal only when it's open */}
        {isModalOpen && selectedTeacher && (
          <Modal
            heading={selectedTeacher.name}
            pic={selectedTeacher.image}
            content_1="" // You can adjust the content displayed in the modal
            content_2={selectedTeacher.description} // Pass the teacher's description
            onClose={closeModal} // Close modal on button click
          />
        )}
      </div>
    </div>
  );
};

export default Teacher;
