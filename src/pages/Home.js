import React from 'react'
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GrLocation } from 'react-icons/gr'
import { BiPhone } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import myResume from '../resume/kyles-resume.pdf'
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <Jumbotron className="text-center" style={{ background: 'transparent', color: 'white', marginBottom: '0' }}>
        <h1 style={{ fontSize: '50', textShadow: '2px 2px rgba(129, 135, 145)' }}>About Me</h1>
      </Jumbotron>
      <Container>
        <Row>
          <Col className="about-container" sm={12} md={6}>
            <img src="https://imgur.com/XQGK162.jpg" alt="me" className="about-img"/>
          </Col>
          <Col sm={12} md={6}>
            <p className="about-desc">Full Stack Web Developer with a B.S. in Biology and passionate in expanding current knowledge and skill sets. Effective at creating well-designed, user-friendly applications by combining creativity and conflict resolution. Recognized by peers for attention to detail, reliability, and being collaborative.</p>
            <br></br>
          <Container className="info-container">
            <Row>
              <Col>
                <h4 className="info-title">Info</h4>
                <hr></hr>
                <p><span><GrLocation /></span> Austin, Texas</p>
                <p><span><BiPhone /></span> 281-624-8908</p>
                <p><span><HiOutlineMail /></span> ktkyletran@gmail.com</p>
              </Col>
              <div className="split"></div>
              <Col>
              <h4 className="info-title">Social Media</h4>
              <hr></hr>
                <p>
                  <a href="https://www.linkedin.com/in/kyle-tran-89245b1b9/" target="_blank" rel="noreferrer" className="social-link"><AiFillLinkedin /> LinkedIn</a>
                </p>
                <p>
                  <a href="https://github.com/ktkyletran" target="_blank" rel="noreferrer" className="social-link"><AiFillGithub /> GitHub</a>
                </p>
              </Col>
            </Row>
          </Container>
          <Container fluid="true" className="d-flex justify-content-center">
            <Row>
              <Col className="resume-container">
                <a download={'kyles-resume.pdf'} href={myResume}><Button variant="light" size="lg" className="resume-btn">Download Resume</Button></a>
              </Col>
            </Row>
          </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
