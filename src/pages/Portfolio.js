import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { Container, Row, Jumbotron, Col } from 'react-bootstrap'
import './Portfolio.css'


const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <Jumbotron className="text-center" style={{ background: 'transparent', color: 'white', marginBottom: '0' }}>
        <h1 style={{ fontSize: '50', textShadow: '2px 2px rgba(129, 135, 145)' }}>Portfolio</h1>
      </Jumbotron>
      <Container className="project-container">
        <Row sm={1} md={1} lg={2} style={{rowGap: '30px'}}>
          <Col sm={12} md={6} lg={4}>
            <ProjectCard 
              src="https://imgur.com/tSmMLdg.jpg" 
              title="Mind Managed" 
              description="Tracks a user's daily mood, prescription use, and journal entry so that the user can keep a detailed record to show their doctor." 
              deployedLink="https://obscure-beyond-60909.herokuapp.com/"
              githubLink="https://github.com/ktkyletran/MindManaged/tree/main"
            />
          </Col>
          <Col sm={12} md={6} lg={4}>
            <ProjectCard 
              src="https://i.imgur.com/SnrtCJI.png" 
              title="FoodFeed" 
              description="Allows users to search for a place to eat whether it's local or in another city and save their favorite location(s)." 
              deployedLink="https://ktkyletran.github.io/FoodFeed/"
              githubLink="https://github.com/ktkyletran/FoodFeed"
            />
          </Col>
          <Col sm={12} md={6} lg={4}>
            <ProjectCard 
              src="https://imgur.com/vUva716.png" 
              title="Weather App" 
              description="Retrieves the current and 5-day forecast for any city."
              deployedLink="https://ktkyletran.github.io/weather-wizard/"
              githubLink="https://github.com/ktkyletran/weather-wizard" 
            />
          </Col>
          <Col sm={12} md={6} lg={4}>
            <ProjectCard 
              src="https://imgur.com/26TgJbL.png" 
              title="Premiere Show" 
              description="Premiere Show allows a user to create a screening discussion board to share their personal projects with friends."
              deployedLink="https://hidden-reaches-62484.herokuapp.com/"
              githubLink="https://github.com/ktkyletran/PremiereShow"  
            />
          </Col>
          <Col sm={12} md={6} lg={4}>
            <ProjectCard 
              src="https://imgur.com/ALThFYi.png"
              title="Technically Tech" 
              description="CMS-style blog site where aspiring, current, and former developers can discuss technical concepts, recent advancements, and new technologies."
              deployedLink="https://technically-tech.herokuapp.com/login"
              githubLink="https://github.com/ktkyletran/technically-tech"  
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Portfolio
