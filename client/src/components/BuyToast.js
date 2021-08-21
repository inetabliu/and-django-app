import React, { useState } from 'react'
import { Row, Col, Toast, Button, ToastContainer } from 'react-bootstrap'

const BuyToast = () => {
  const [show, setShow] = useState(false)

  return (

    <Row>

      <ToastContainer position="top-end" className="p-3">
        <Toast position="top-end" onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Success</strong>
          </Toast.Header>
          <Toast.Body>Your item has been sucessfully added to your basket</Toast.Body>
        </Toast>
      </ToastContainer>

      <Col>
        <Button onClick={() => setShow(true)} style={{ width: '100%', marginBottom: '2.5%', marginTop: '2.5%' }} className="btn btn-primary btn-lg" variant="danger">Buy me</Button>

      </Col>
    </Row>
  )
}


export default BuyToast