import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'


const EmailModel = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button style={{ width: '100%', marginBottom: '2.5%', marginTop: '2.5%' }} className="btn btn-primary btn-lg" variant="danger" onClick={handleShow}>
        Notify Me
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Notify when back in stock</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Enter your email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Button variant="danger" style={{ width: '100%', marginBottom: '2.5%', marginTop: '2.5%' }} type="submit">Send</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default EmailModel