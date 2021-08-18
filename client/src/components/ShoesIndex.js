/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'





const ShoesIndex = () => {
  const [shoes, setShoes] = useState([])
  const [size, setSize] = useState([])

  const { id } = useParams()
  console.log('my id', id)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/shoes/${id}/`)
      console.log(data)
      console.log(data.variant)
      setShoes(data)

    }

    getData()
  }, [id])

  return (
    <Container>
      <img src={`http://localhost:8000${shoes.picture}`} />
      <h1 >{shoes.brand} - {shoes.model_name}</h1>
      <p>£{shoes.price}</p>
      <h1 className="float-end">Sizes available</h1>

      <div className="container">
        <div className="row row-cols-auto">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
    </Container>

  )
}

export default ShoesIndex