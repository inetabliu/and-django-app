import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import BasketModal from './components/BasketModal'


const Navigation = () => {




  return (


    <Navbar className="danger" style={{ marginBottom: '10%' }} collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Navbar.Brand href="/home">GS Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Products</Nav.Link>
          </Nav>
          <Nav>
            <BasketModal />
          </Nav>
        </Navbar.Collapse>
      </Container>


    </Navbar>



  )
}

export default Navigation