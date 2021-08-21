import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'


const Footer = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container className="justify-content-center" >
        <Nav.Link style={{ color: '#fff' }} href="/"><i className="fab fa-facebook"></i></Nav.Link>
        <Nav.Link style={{ color: '#fff' }} href="/"><i className="fab fa-instagram"></i></Nav.Link>
        <Nav.Link style={{ color: '#fff' }} href="/"><i className="fab fa-twitter"></i></Nav.Link>
      </Container>
    </Navbar>
  )
}

export default Footer