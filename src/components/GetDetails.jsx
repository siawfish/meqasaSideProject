import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

export default function GetDetails({
   show=false,
   onHide,
   onChange,
   onSubmit,
   err
}) {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Reveal Number</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <small>
                    To view number, first enter your contact info (Do this once only). 
                    If you are unable to reach the owner/broker, then they can reach you.
                </small>
                <div className="err">{err}</div>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={(e)=>onChange("name", e)} type="text" placeholder="Enter full name" />
                </Form.Group>
                <Form.Group controlId="number">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control onChange={(e)=>onChange("phone", e)} type="number" placeholder="Enter phone number" />
                </Form.Group>
                <Button onClick={onSubmit} block variant="primary" type="submit">
                    Submit
                </Button>
            </Modal.Body>
        </Modal>
    )
}
