import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Button, Row, Col, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const ShoesShow = () => {
  // eslint-disable-next-line no-unused-vars
  const [shoes, setShoesShow] = useState([])

  const ukSizes = [4, 5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13]


  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/shoes/')
      setShoesShow(data)
    }
    getData()
  }, [])

  return (

    <Container className="d-flex">
      <div style={{ width: '30%' }}>
        <h1 className="text-center">Welcome to Golden Shoe</h1>
        <Form.Select style={{ marginBottom: '5%', alignItems: 'center' }} aria-label="Select shoe brand">
          <option>Browse current brands</option>
          <option value="nike">Nike</option>
          <option value="adidas">Adidas</option>
          <option value="vans">Vans</option>
          <option value="reebok">Reebok</option>
          <option value="superga">Superga</option>
        </Form.Select>
        <div className="container d-flex flex-wrap justify-content-center">
          {ukSizes.map(el =>
            <div key={el}>
              <input type="radio" className="btn-check" name="options" id={el} autoComplete="off" />
              <label style={{ marginBottom: '5%' }} className="btn btn-secondary text-nowrap" htmlFor={el}>UK {el}</label>
            </div>
          )}
        </div>
      </div>



      <Container>
        <Row xs={1} md={2} className="g-4">
          {shoes.map(el =>
            <Col key={el.id}>
              <Card style={{ width: '25rem' }}>
                <Card.Img className="img-fluid" style={{ width: '100%', height: '25vh', objectFit: 'cover' }} variant="top" src={`http://localhost:8000${el.picture}`} />
                <Card.Body>
                  <Card.Title style={{ textAlign: 'center' }}>{el.brand}</Card.Title>
                  <Card.Text>
                    <strong>Model: </strong> {el.model_name}
                  </Card.Text>
                  <Card.Text>
                    <strong><i className="fas fa-pound-sign"></i> {el.price}</strong>
                  </Card.Text>

                  <Button variant="danger"> <Link style={{ textDecoration: 'none', color: 'white' }} to={`/shoes/${el.id}`}>View Item</Link></Button>
                </Card.Body>
              </Card >
            </Col>
          )}
        </Row>
      </Container>
    </Container>

  )
}

export default ShoesShow