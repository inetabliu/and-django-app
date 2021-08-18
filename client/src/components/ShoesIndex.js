/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'





const ShoesIndex = () => {
  const [shoes, setShoes] = useState([])
  const [size, setSize] = useState([])

  const { id } = useParams()
  console.log('my id', id)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/shoes/${id}/`)
      console.log(data)
      console.log(data.variants[0].size.uk_size) //size of a certain shoe
      console.log(data.variants[0].quantity) //quantity of that particular shoe size
      setShoes(data)
      setSize(data.variants)

    }

    getData()
  }, [id])

  return (
    <Container className="d-flex">
      <div>
        <img src={`http://localhost:8000${shoes.picture}`} />
        <div className="float-end">
          <h1 >{shoes.brand} - {shoes.model_name}</h1>
          <p className="float-end">£{shoes.price}</p>
        </div>

      </div>


      <Container>
        <h1>Sizes currently available</h1>
        <div className="row row-cols-auto ">
          {size.map(el =>
            <>
              <input type="radio" className="btn-check" name="options" id={el.id} autoComplete="off" />
              <label className="btn btn-secondary" htmlFor={el.id}>UK {el.size.uk_size}</label>
            </>
          )}
        </div>
        <Button variant="danger">Buy me now</Button>
      </Container>
    </Container>

  )
}

export default ShoesIndex