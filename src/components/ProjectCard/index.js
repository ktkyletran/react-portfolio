import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './index.css'

const ProjectCard = (props) => {
  return (
    <div id="fadeInBottom" className="fadeInBottom">
        <Card id="card">
          <Card.Img variant="top" src={props.src} id="card-img"/>
          <Card.Body>
            <a href={props.deployedLink} target="_blank" rel="noreferrer"><Card.Title id="card-title">{props.title}</Card.Title></a>
            <Card.Text id="card-text">
              {props.description}
            </Card.Text>
          </Card.Body>
            <a href={props.githubLink} target="_blank" rel="noreferrer"><Button variant="outline-dark" id="github-btn">GitHub</Button></a>
        </Card>
    </div>
  )
}

export default ProjectCard
