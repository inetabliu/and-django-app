import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'


const Navigation = () => {




  return (


    <Navbar className="danger" style={{ marginBottom: '10%' }} collapseOnSelect expand="lg" bg="danger" variant="dark">

      <Navbar.Brand href="#home">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#deets">News</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/">Products</Nav.Link>
          <Nav.Link href=""><i className="fas fa-shopping-basket"></i></Nav.Link>

        </Nav>
      </Navbar.Collapse>

    </Navbar>



  )
}

export default Navigation