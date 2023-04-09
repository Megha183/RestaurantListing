import {React,useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Review from './Review';
import OperatingTime from './OperatingTime';

import './file.css'




function RestView() {
  
  var [Allrestaurants,setRestaurants]=useState([])

  const fetchRest=async()=>{
    const result=await fetch('/restaurants.json')
    result.json().then( data=>{
        setRestaurants(data.restaurants)
      } )
  }
  const params=useParams()
 //  console.log(params.id);


 console.log(Allrestaurants);
 const restaurant= Allrestaurants.find(item=>item.id=params.id)
 console.log(restaurant);
useEffect(()=>{
  fetchRest()
},[])

  
  return (
    <div>
    { 
       restaurant?(
      <Row>
      <Col lg={6} md={6} className="p-5  text-center" >
    
          <img className='rounded border listgrp ' alt='' style={{height:'500px'}} src={restaurant.photograph}/>
      </Col>
      <Col lg={6} md={6} className="p-5 ">

  
    <ListGroup className=' me-5 listgrp'>
      <ListGroup.Item><h1 id="title">{restaurant.name}</h1></ListGroup.Item>
      <ListGroup.Item> <strong>Address</strong> :{restaurant.address}</ListGroup.Item>
      <ListGroup.Item><strong>Cuisine type</strong>:{restaurant.cuisine_type}</ListGroup.Item>
      <ListGroup.Item><strong>Neighborhood</strong>:{restaurant.neighborhood}</ListGroup.Item>
      <ListGroup.Item > 
       <div className='mt-4'><OperatingTime timeData={restaurant.operating_hours}></OperatingTime></div>
       <div className='mt-3'> <Review reviewData={restaurant.reviews}></Review>  </div>
        </ListGroup.Item>

    </ListGroup>
    
  
      </Col>
    </Row>):""
  }
  </div>
  )
}

export default RestView