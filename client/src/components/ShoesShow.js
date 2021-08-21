/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Button, Row, Col, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const ShoesShow = () => {
  // Set all shoes state
  const [shoes, setShoes] = useState([])
  const [filterredShoes, setFilteredShoes] = useState([])



  //Get all shoes data
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/shoes/')
      setShoes(data)
      setFilteredShoes(data)
      console.log('my data', data)

    }
    getData()
  }, [])


  const handleBrandChange = (event) => {
    console.log('it changing', event.target.value)
    if (event.target.value === 'none') {
      setFilteredShoes(shoes)
      return
    }

    setFilteredShoes(shoes.filter(el => el.brand === event.target.value))
  }

  return (
    <Container>
      <Row>
        <Col className="text-center" md="4">
          <h1 >Welcome to Golden Shoe</h1>
          <Form.Select onChange={handleBrandChange} style={{ marginBottom: '5%', alignItems: 'center' }} aria-label="Select shoe brand">
            <option value='none'>Browse current brands</option>
            {shoes.map(brand =>
              <option key={brand.id} id={brand.id} value={brand.brand}>{brand.brand}</option>
            )}
          </Form.Select>
        </Col>

        <Col sm="12" md="8">
          <Row>
            {filterredShoes.map(el =>
              <Col key={el.id} lg="6" md="12">
                <Card style={{ marginBottom: '2rem' }}>
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
                </Card>
              </Col>
            )}
          </Row>
        </Col>


      </Row>

    </Container >

  )
}

export default ShoesShow