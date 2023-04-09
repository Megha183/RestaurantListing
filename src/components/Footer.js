import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'

function Footer() {
    return (
        <div className="footer" >
            <Row >
                <Col className='text-center text-light p-3'>
                <p>All rights are reserved to <strong>reastaurantname</strong> & reg:2023</p>
                </Col>
            </Row>
        </div>
    )
}

export default Footer