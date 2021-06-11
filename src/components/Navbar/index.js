import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect bg="none" expand="sm" variant="dark">
        <Navbar.Brand>Kyle's Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Navigation
