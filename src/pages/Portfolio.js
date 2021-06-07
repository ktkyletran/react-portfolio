import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { Container, Row, Jumbotron } from 'react-bootstrap'


const Portfolio = () => {
  return (
    <div>
      <Jumbotron className="text-center">
        <h1>Portfolio</h1>
      </Jumbotron>
      <Container >
        <Row sm={1} md={2} lg={2}>
            <ProjectCard 
              src="https://i.imgur.com/SnrtCJI.png" 
              title="FoodFeed" 
              description="Allows users to search for a place to eat whether it's local or in another city and save their favorite location(s)." 
            />
            <ProjectCard 
              src="https://imgur.com/vUva716.png" 
              title="Weather App" 
              description="Retrieves the current and 5-day forecast for any city." 
            />
            <ProjectCard 
              src="https://imgur.com/26TgJbL.png" 
              title="Premiere Show" 
              description="Premiere Show allows a user to create a screening discussion board to share their personal projects with friends." 
            />
            <ProjectCard 
              src="https://imgur.com/ALThFYi.png"
              title="Technically Tech" 
              description="CMS-style blog site where aspiring, current, and former developers can discuss technical concepts, recent advancements, and new technologies."
            />

        </Row>
      </Container>
    </div>
  )
}

export default Portfolio
