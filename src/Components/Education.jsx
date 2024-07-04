import React from 'react';
import image from "../images/img2.avif";

const imageAltText = "Education background";

const educationData = [
  {
    degree: 'Bachelor of Engineering in Information Technology',
    duration: '2021 - 2025',
    description: 'Focused on software engineering, data structures, algorithms, and web development.'
  },
];

const Education = () => {
  return (
    <section className="padding" id="education">
      <img className="background" src={image} alt={imageAltText} />
      <div className="content-container">
        <div className="content">
          <h2>Education</h2>
          <div className="education-list">
            {educationData.map((education, index) => (
              <div key={index} className="education-item">
                <div><strong>Degree:</strong> {education.degree}</div>
                <div><strong>Duration:</strong> {education.duration}</div>
                <div><strong>Description:</strong> {education.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
