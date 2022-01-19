import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import CardGroup from 'react-bootstrap/CardGroup';
import Columns from "react-columns"


function App() {

  const [latest, setLatest] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v3/covid-19/all"),
        axios.get("https://corona.lmao.ninja/v2/countries?sort=country")])
      .then(responseArr => {
        setLatest(responseArr[0].data);
        setResults(responseArr[1].data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();
  {
    var queries = [{
      columns: 2,
      query: 'min-width: 500px'
    }, {
      columns: 3,
      query: 'min-width: 1000px'
    }];
  }
  return (
    <div>
      <CardGroup>
        <Card bg="primary" text="white" className='text-center' style={{ margin: "10px" }}>

          <Card.Body>
            <Card.Title>Cases:</Card.Title>
            <Card.Text>
              {latest.todayCases}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card bg="danger" text="white" className='text-center' style={{ margin: "10px" }}>

          <Card.Body>
            <Card.Title>Deaths:</Card.Title>
            <Card.Text>
              {latest.todayDeaths}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small >Last updated  {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card bg="success" text="white" className='text-center' style={{ margin: "10px" }}>

          <Card.Body>
            <Card.Title>Recovered:</Card.Title>
            <Card.Text>
              {latest.todayRecovered}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small >Last updated  {lastUpdated}</small>
          </Card.Footer>
        </Card>
      </CardGroup>


<Columns queries={queries}>
    {results.map((data) => (
         
      <Card

            bg="light"
            text='dark'
            className='text-center'
            style={{ margin: "10px" }}>
            <Card.Img variant="top" src={data.countryInfo.flag} />
            <Card.Body>
              <Card.Title>{data.country}</Card.Title>
              <Card.Text>Cases {data.cases}</Card.Text>
              <Card.Text>Deaths {data.deaths}</Card.Text>
              <Card.Text>Recovered {data.recovered}</Card.Text>
              <Card.Text>Today's Cases {data.todayCases}</Card.Text>
              <Card.Text>Today's Deaths {data.todayDeaths}</Card.Text>
              <Card.Text>Today's Recovered {data.todayRecovered}</Card.Text>
              <Card.Text>Active {data.active}</Card.Text>
              <Card.Text>Critical {data.critical}</Card.Text>
            </Card.Body>
          </Card>
        ))
        }
</Columns>
</div>

  )
}

export default App;
