import React,{useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"

function App() {

  const[latest,setLatest] = useState("");

  useEffect(() =>{
    axios
    .get("https://corona.lmao.ninja/v3/covid-19/all")
    .then(res => {
      setLatest(res.data);
    })
    .catch(err =>{
      console.log(err);
    });
  },[]);

  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();
  return (
    <div>
      <CardGroup>
  <Card bg="primary" text="white" className='text-center' style={{margin : "10px"}}>
   
    <Card.Body>
      <Card.Title>Cases</Card.Title>
      <Card.Text>
       {latest.todayCases}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated {lastUpdated}</small>
    </Card.Footer>
  </Card>
  <Card bg="danger" text="white" className='text-center' style={{margin : "10px"}}>
   
    <Card.Body>
      <Card.Title>Deaths</Card.Title>
      <Card.Text>
       {latest.todayDeaths}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >Last updated  {lastUpdated}</small>
    </Card.Footer>
  </Card>
  <Card bg="success" text="white" className='text-center' style={{margin : "10px"}}>
  
    <Card.Body>
      <Card.Title>Recovered</Card.Title>
      <Card.Text>
        {latest.todayRecovered}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >Last updated  {lastUpdated}</small>
    </Card.Footer>
  </Card>
</CardGroup>
    </div>
  )
}

export default App
