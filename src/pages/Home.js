import React from 'react'
import { Container, Row, Col, Card, Jumbotron } from 'react-bootstrap'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GrLocation } from 'react-icons/gr'
import { BiPhone } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import myResume from '../resume/kyles-resume.pdf'

const Home = () => {
  return (
    <div>
      <Jumbotron className="text-center">
        <h1>About Me</h1>
      </Jumbotron>
      <Container>
        <Row>
          <Col style={{backgroundColor: 'blue'}}>
            <img src="https://i.imgur.com/XQGK162m.jpg" alt="me" />
            <p>Full Stack Web Developer with a B.S. in Biology and passionate in expanding current knowledge and skill sets. Effective at creating well-designed, user-friendly applications by combining creativity and conflict resolution. Recognized by peers for attention to detail, reliability, and being collaborative.</p>
          </Col>
          <Col style={{backgroundColor: 'red'}}>
            <Container style={{backgroundColor: 'green'}}>
              <h1>Info</h1>
              <p><span><GrLocation /></span> Austin, Texas</p>
              <p><span><BiPhone /></span> 281-624-8908</p>
              <p><span><HiOutlineMail /></span> ktkyletran@gmail.com</p>
            </Container>
            <Container>
              <Row>
                <Card Body style={{backgroundColor: 'yellow'}}>
                  <a href="https://www.linkedin.com/in/kyle-tran-89245b1b9/" target="_blank" rel="noreferrer"><AiFillLinkedin /> LinkedIn</a>
                </Card>
              </Row>
              <Row>
                <Card Body style={{backgroundColor: 'yellow'}}>
                  <a href="https://github.com/ktkyletran" target="_blank" rel="noreferrer"><AiFillGithub /> GitHub</a>
                </Card>
              </Row>
              <Row>
                <Card Body style={{backgroundColor: 'yellow'}}>
                  <a download={'kyles-resume.pdf'} href={myResume}>Download Resume</a>
                </Card>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
