/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Web Design and Development",
    description: "The most modern and high-quality design made at a professional level."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Database Design and Development",
    description: "High-quality development of sites at the professional level."
  },
  {
    icon: "/images/icon-app.svg",
    title: "Native Mobile Apps Development",
    description: "Professional development of applications for iOS and Android."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "MERN Fullstack Development",
    description: "I make high-quality photos of any category at a professional level."
  }
];


const About = () => {
  const [testimonials , setTestimonials ] = useState([]);
  useEffect(()=> {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <p>Hello,<br></br> I am a MERN stack developer from Nairobi, Kenya, working in web development and software engneering.
        I enjoy turning complex problems into simple, beautiful and intuitive designs.
      </p>

      <p>
        My job is to build your web app so that it is functional and user-friendly but at the same time attractive by creating mobile app that resembles it totally.
        Moreover, I
        add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
        across your
        message and identity in the most creative way. I created web design for many famous brand companies.
      </p>
      <p>
        My most recent development project focused on building a web-based e-commerce using a microservices architecture. 
        I utilized technologies such as React.js for the front-end, Node.js for back-end microservices, and Docker for containerization. 
        Team collaboration was facilitated through Slack for communication, Jira for project management, and GitHub for version control and 
        continuous integration.
      </p>
    </section>


    {/* <!--
      - service
    --> */}

    <section className="service">

      <h3 className="h3 service-title">My Services</h3>

      <ul className="service-list">

      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - testimonials
    --> */}

    <section className="testimonials">

      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">

      {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - clients
    --> */}

    <section className="clients ">

      <h3 className="h3 clients-title">Clients</h3>

      <ul className="clients-list has-scrollbar ">

        <li className="clients-item avatar-box" >
          <a href="#">
            <img src="images/thephilslogo.png"  alt="client logo"/>
          </a>
        </li>

        <li className="clients-item avatar-box">
          <a href="#">
            <img src="images/logo-2-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item avatar-box">
          <a href="#">
            <img src="images/logo-3-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item avatar-box">
          <a href="#">
            <img src="images/logo-4-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item avatar-box">
          <a href="#">
            <img src="images/logo-5-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item avatar-box">
          <a href="#">
            <img src="images/logo-6-color.png"alt="client logo"/>
          </a>
        </li>

      </ul>

    </section>

    {/* <!--
      - Projects
    --> */}

    <section className="clients">

    <h3 className="h3 clients-title">Projects</h3>

    <ul className="clients-list has-scrollbar">

      <li className="clients-item " >
        <a href="#">
          <img src="images/thephilslogo.png"  alt="client logo"/>
          <p className="">The Phil Writers Website</p>
        </a>
      </li>

      <li className="clients-item">
        <a href="#">
          <img src="images/logo-2-color.png" alt="client logo"/>
        </a>
      </li>

      <li className="clients-item">
        <a href="#">
          <img src="images/logo-3-color.png" alt="client logo"/>
        </a>
      </li>

      <li className="clients-item">
        <a href="#">
          <img src="images/logo-4-color.png" alt="client logo"/>
        </a>
      </li>

      <li className="clients-item">
        <a href="#">
          <img src="images/logo-5-color.png" alt="client logo"/>
        </a>
      </li>

      <li className="clients-item">
        <a href="#">
          <img src="images/logo-6-color.png"alt="client logo"/>
        </a>
      </li>

    </ul>

    </section>

    {/* <!--
      - clients
    --> */}

    <section className="clients">

    <a href="" ><h3 className="h3 clients-title">Certificates</h3></a>

    <ul className="clients-list has-scrollbar">

      <li className="clients-item" >
        <a href="#">
          <img src="images/Agile-linkedIn.jpg"  alt="client logo"/>
        </a>
      </li>

      <li className="clients-item">
        <a href="#">
          <img src="images/logo-2-color.png" alt="client logo"/>
        </a>
      </li>

      <li className="clients-item">
        <a href="#">
          <img src="images/logo-3-color.png" alt="client logo"/>
        </a>
      </li>

      <li className="clients-item">
        <a href="#">
          <img src="images/logo-4-color.png" alt="client logo"/>
        </a>
      </li>

      <li className="clients-item">
        <a href="#">
          <img src="images/logo-5-color.png" alt="client logo"/>
        </a>
      </li>

      <li className="clients-item">
        <a href="#">
          <img src="images/logo-6-color.png"alt="client logo"/>
        </a>
      </li>

    </ul>

    </section>


  </article>
  )
}

export default About