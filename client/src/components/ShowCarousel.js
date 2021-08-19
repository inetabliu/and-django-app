import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import axios from 'axios'


const ShoeCarousel = () => {

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

    <Carousel show={3}>
      {shoes.map(el =>
        <Carousel.Item key={el.id}>
          <img
            className="d-block w-100"
            src={`http://localhost:8000${el.picture}`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      )}


    </Carousel>
  )
}


export default ShoeCarousel