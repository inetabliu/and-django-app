/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Container, Button, Accordion } from 'react-bootstrap'
import EmailModel from './EmailModal'
import BuyToast from './BuyToast'






const ShoesIndex = ({ toggleShowA }) => {
  //State management for shoes data and size data
  const [shoes, setShoes] = useState([])
  const [size, setSize] = useState([])

  const { id } = useParams()
  console.log('my id', id)

  //Get shoes data by id
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/shoes/${id}/`)
      setShoes(data)
      setSize(data.variants)
    }
    getData()
  }, [id])




  return (
    <Container>
      <div className="row justify-content-center">
        <div className="col-md-auto">
          <img style={{ marginTop: '5%', maxWidth: '100%', height: 'auto' }} className="img-fluid" src={`http://localhost:8000${shoes.picture}`} />
          <h1>{shoes.brand} - {shoes.model_name}</h1>
          <h3><i className="fas fa-pound-sign"></i><strong>{shoes.price}</strong></h3>
        </div>

        <div style={{ width: '700px' }} className="col-md-auto">
          <div>
            <p className="fw-bold">Select size</p>
          </div>
          <small className="float-end">
            <a style={{ textDecoration: 'none', color: 'grey' }} href="https://www.sioux-shop.co.uk/cms/shoe-know-how/shoe-size-and-fit/shoe-size-table/" target="_blank" rel="noreferrer">
              Size Guide</a>
          </small>
          <div>
            {size.length === 0 ?
              <p className="text-center">No shoes currently in stock</p>
              :
              size.map(el =>
                <div style={{ marginLeft: '2%' }} key={el.id} className="btn-group btn-group-sm" role="group" aria-label="Basic outlined example">
                  <input type="radio" className="btn-check" name="uk_size" id={el.size.uk_size} autoComplete="off" />
                  <label name="uk_size" className="btn btn-secondary text-nowrap" htmlFor={el.size.uk_size}>UK {el.size.uk_size}</label>
                </div>
              )
            }
          </div>

          <div style={{ marginBottom: '20%' }}>
            {size.length === 0 ? <EmailModel /> : <BuyToast />}
            <Accordion >
              <Accordion.Item eventKey="0">
                <Accordion.Header>Delivery & Returns</Accordion.Header>
                <Accordion.Body>
                  <ul>Free standard delivery with purchases over £25.
                    <li>
                      Delivery may take longer than normal. Check your estimated delivery date at checkout.
                    </li>
                    <li>You can return your order for any reason, free of charge, within 60 days</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>How it was made</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </Container >



  )
}

export default ShoesIndex