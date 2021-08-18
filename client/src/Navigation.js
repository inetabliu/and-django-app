import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'


const Navigation = () => {


  return (


    <Navbar className="danger" style={{ marginBottom: '10%' }} collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#deets">News</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="">Products</Nav.Link>
            <Nav.Link href="">Basket</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Navigation