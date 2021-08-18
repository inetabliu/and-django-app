import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ShoesShow = () => {
  // eslint-disable-next-line no-unused-vars
  const [shoes, setShoesShow] = useState([])


  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/shoes/')
      console.log(res.data)
      setShoesShow(res.data)
    }
    getData()
  }, [])

  return (


    shoes.map(el =>
      <Row key={el.id} xs={2} md={2} className="g-2">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`http://localhost:8000${el.picture}`} />
          <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>{el.brand}</Card.Title>
            <Card.Text>
              <strong>Model: </strong> {el.model_name}
            </Card.Text>
            <Card.Text>
              <strong>£ {el.price}</strong>
            </Card.Text>

            <Button variant="danger"> <Link to={`/shoes/${el.id}`}>View Item</Link></Button>
          </Card.Body>
        </Card >
      </Row >
    )

  )
}

export default ShoesShow