import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'


function Header() {
  return (
    <div  >
    <Navbar className="nav" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://i.postimg.cc/fRh96L2T/icon1.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           <span className='ms-3 text-light'> RestaurantName</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header