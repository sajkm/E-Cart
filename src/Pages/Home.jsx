import React from 'react'
import { Row,Col,Card,Button } from 'react-bootstrap'

function Home() {
  return (
    <Row style={{marginTop:'100px'}}>
      <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='d-flex justify-content-between'>
          <Button variant="btn btn-light"><i class="fa-solid fa-heart text-danger fa-2x"></i></Button>
          <Button variant="btn btn-light"><i class="fa-solid fa-cart-plus text-success fa-2x"></i></Button>
          </div>
      </Card.Body>
    </Card>
      </Col>
    </Row>
  )
}

export default Home