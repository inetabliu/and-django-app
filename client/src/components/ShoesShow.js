/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Button, Row, Col, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ShoesCard from './ShoesCard'


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
            {filterredShoes.map(shoe =>
              <Col key={shoe.id} lg="6" md="12">
                <ShoesCard shoe={shoe} />
              </Col>
            )}
          </Row>
        </Col>


      </Row>

    </Container >

  )
}

export default ShoesShow