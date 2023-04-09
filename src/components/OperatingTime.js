import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function OperatingTime({ timeData }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="warning" onClick={handleShow}>
                Operating hours
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Operating Hours</Modal.Title>
                </Modal.Header>
                <Modal.Body >

                    <ListGroup>
                        <ListGroup.Item> <pre><strong>Monday</strong>| {timeData.Monday}</pre></ListGroup.Item>
                        <ListGroup.Item><pre><strong>Tuesday</strong>|{timeData.Tuesday}</pre></ListGroup.Item>
                        <ListGroup.Item><pre><strong>Wednesday</strong>|{timeData.Wednesday}</pre></ListGroup.Item>
                        <ListGroup.Item><pre><strong>Thursday</strong>|{timeData.Thursday}</pre></ListGroup.Item>
                        <ListGroup.Item><pre><strong>Friday</strong>|{timeData.Friday}</pre></ListGroup.Item>
                        <ListGroup.Item><pre><strong>Saturday</strong>|{timeData.Saturday}</pre></ListGroup.Item>
                        <ListGroup.Item><pre><strong>Sunday</strong>|{timeData.Sunday}</pre></ListGroup.Item>
                    </ListGroup>

                </Modal.Body>
            </Modal>
        </div>
    )
}

export default OperatingTime