import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';
// import Certificates from '.../assets';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Multimedia University of Kenya | University "
            date="2019 - 2023"
            description="Graduated on October, 2023 and was awarded a Second Class Lower in Bachelors of Business Information Technology from Multimedia University of Kenya. Have passion for software engineering and technology at large. 
            Have gained commercial experience with exposure to software development. Able to perform a full software development life cycle activity, including carrying out straightforward design, testing, support for database design and solutions following existing methodology set by senior colleagues
            "
          />
          <TimelineItem
            title="Tumaini House School | High School "
            date="2013 - 2018"
            description="Written Kenya Cerficate of Secondary Education (K.C.S.E)"
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Software Developer Intern"
            date="Jan 2023 – Aug 2023" 
            description="•	Developed a web application using AWS S3, MongoDB, React/Redux, NodeJS, and Azure Blob Storage for real-time services to over 2,000 customers.
            •	Partnered with a team of five developers to create an E-commerce platform for small businesses.
            •	Improved workflow efficiency by 28% through program code development for a high-traffic ecommerce website, leading to contract renewal.
            "
          />
          <TimelineItem
            title="Assistant Librarian (Volunteer) | Tumaini House School, Nakuru, Kenya"
            date="Dec 2018 – Jun 2019" 
            description="•	Assisted in sorting library books and guided students on the best books to use."
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Projects</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="CRM Mobile App"
            date="" 
            description="•	Designed and developed a fully featured CRM mobile application.
            •	Implemented testing procedures, reducing system downtime.
            •	Technologies Used: React Native, Node JS, MongoDB, Express JS.
            "
          />

          <TimelineItem
            title="Ecommerce Web App"
            date="" 
            description=" Roles: 
            •Led the development of an ecommerce web app for small businesses, focusing on scalability and user experience.
            •	Integrated payment gateways to support secure transactions and various payment methods.
            •	Conducted user acceptance testing (UAT) to ensure the app met client requirements and provided a seamless shopping experience.
            •	Achievements:
            •	Successfully launched the app within the project timeline, resulting in increased client satisfaction.
            •	Enhanced the app's performance, reducing page load times by 35%.
            •	Implemented a robust order management system, improving order processing efficiency by 40%.
            •	Technologies Used: AWS, React/Redux, Node JS, MongoDB, Azure Blob Storage.
            "
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Web Design and Development" value={95} />
          <SkillItem title="MERN Fullstack Deeveloper " value={90} />
          <SkillItem title="Native/Mobile App Development" value={80} />
          <SkillItem title="Database Design and Devveloment" value={50} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
