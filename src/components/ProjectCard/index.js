import React from 'react'
import { Card, Button } from 'react-bootstrap'

const ProjectCard = (props) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.src} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
    </div>
  )
}

export default ProjectCard
