import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <CardGroup>
  <Card bg="primary" text="white" className='text-center' style={{margin : "10px"}}>
   
    <Card.Body>
      <Card.Title>Cases</Card.Title>px
      <Card.Text>
       100
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg="danger" text="white" className='text-center' style={{margin : "10px"}}>
   
    <Card.Body>
      <Card.Title>Deaths</Card.Title>
      <Card.Text>
       0
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg="success" text="white" className='text-center' style={{margin : "10px"}}>
  
    <Card.Body>
      <Card.Title>Recovered</Card.Title>
      <Card.Text>
        99
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
    </div>
  )
}

export default App
