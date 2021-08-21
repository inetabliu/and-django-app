import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'


const BasketModal = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        <i className="fas fa-shopping-basket"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>My bag</Modal.Title>
        </Modal.Header>
        <Modal.Body>My bag is empty</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Continue shopping
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default BasketModal