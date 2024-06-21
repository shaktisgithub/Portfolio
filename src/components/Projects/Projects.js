import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import BrandPage from "../../Assets/Projects/brand page.png";
import netflix from "../../Assets/Projects/netflix.png";
import brainWave from "../../Assets/Projects/brain-wave.png";
import weather from "../../Assets/Projects/weather.png";
import shop from "../../Assets/Projects/shopping time.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brainWave}
              isBlog={false}
              title="Brain-Wave"
              description="The Brain Wave Project is a cutting-edge web application designed to visualize and analyze brain wave patterns in real-time. Built with React and Tailwind CSS, it offers a seamless, responsive user experience."
              ghLink="https://github.com/shaktisgithub/Brand-Page.git"
              demoLink="https://brain-wave-three.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="Shopping-Time"
              description="The Shopping Time Project is an innovative e-commerce web application designed to provide users with a seamless and enjoyable online shopping experience. Built with React and Tailwind CSS, this project offers a modern, responsive, and user-friendly interface."
              ghLink="https://github.com/shaktisgithub/Shopping-Time.git"
              demoLink="https://shopping-time-plum.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix"
              description="The Netflix Clone Project is a web application that replicates the core functionalities and design of Netflix. Built with React and Tailwind CSS, this project provides a modern, responsive, and interactive user experience for streaming content."
              ghLink="https://github.com/shaktisgithub/Netflix.git"
              demoLink="https://netflix-ten-amber.vercel.app/login"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BrandPage}
              isBlog={false}
              title="Brand-Page"
              description="The Brand Page Project showcases the effective use of modern web development technologies to create a visually appealing and interactive brand showcase. It highlights the synergy of React and Tailwind CSS in building a responsive and dynamic web application."
              ghLink="https://github.com/shaktisgithub/Brand-Page.git"
              demoLink="https://brand-page-xi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather"
              description="The Weather App Project demonstrates the effective use of modern web technologies to create a reliable and visually appealing weather information platform. It showcases the power of React and Tailwind CSS in delivering a responsive, interactive, and user-friendly application."
              ghLink="https://github.com/shaktisgithub/Weather-App.git"
              demoLink="https://weather-app-one-teal.vercel.app/"
            />
          </Col>

    
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
