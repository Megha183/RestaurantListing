import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import './file.css'


function Restcard({ restdata }) {
    return (
        <div>
        <Link to={`/view-restaurant/${restdata.id}`} style={{textDecoration:'none',color:'black'}}>
            <Card style={{ width: '18rem' }} id="card">
                <Card.Img variant="top" src={restdata.photograph}  />
                <Card.Body>
                    <Card.Title>{restdata.name}</Card.Title>
                    <Card.Text>
                        <p>
                           <strong>Cuisine type </strong>: {restdata.cuisine_type}
                        </p>
                        <p>
                        <strong>Address</strong> :  {restdata.address}
                        </p>
                        <p>
                        <strong>Neighborhood</strong> :  {restdata.neighborhood}
                        </p>



                    </Card.Text>
                </Card.Body>
            </Card>
            </Link>
        </div>
    )
}

export default Restcard


