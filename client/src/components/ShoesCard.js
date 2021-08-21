import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const ShoesCard = ({ shoe }) => {
  return (
    <Card style={{ marginBottom: '2rem' }}>
      <Card.Img className="img-fluid" style={{ width: '100%', height: '25vh', objectFit: 'cover' }} variant="top" src={`http://localhost:8000${shoe.picture}`} />
      <Card.Body>
        <Card.Title style={{ textAlign: 'center' }}>{shoe.brand}</Card.Title>
        <Card.Text>
          <strong>Model: </strong> {shoe.model_name}
        </Card.Text>
        <Card.Text>
          <strong><i className="fas fa-pound-sign"></i> {shoe.price}</strong>
        </Card.Text>
        <Link className="btn btn-danger" style={{ textDecoration: 'none', color: 'white' }} to={`/shoes/${shoe.id}`}>View Item</Link>
      </Card.Body>
    </Card>
  )
}

export default ShoesCard