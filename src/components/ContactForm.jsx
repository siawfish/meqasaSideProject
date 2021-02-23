import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export default function ContactForm({
    reference
}) {
    return (
        <Container ref={reference} className="contactForm" fluid>
            <div className="biggerText">Register your interest</div>
            <Row>
                <Col>
                    <div>
                        <Form.Group controlId="formGridAddress1">
                            <Form.Control size="lg" placeholder="Enter full name" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control size="lg" type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control size="lg" type="tel" placeholder="Enter phone number" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control size="lg" type="text" placeholder="Enter address" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control size="lg" type="text" placeholder="Country" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control size="lg" type="text" placeholder="Number of plots" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control size="lg" type="text" placeholder="Where did you hear about us" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control size="lg" placeholder="Comments" as="textarea" rows={4} />
                        </Form.Group>
                        <div className="thickText">If you would like to receive exclusive news and offers from Homeland Dev.</div>
                        <div className="thickText">Co, please select your preferred method of communication below:</div>
                        <div className="checkboxWrapper">
                            <Form.Check inline label="Email" type='checkbox' />
                            <Form.Check inline label="SMS" type='checkbox' />
                            <Form.Check
                                inline
                                label="Phone"
                                type={'checkbox'}
                            />
                        </div>
                        <Button>SUBMIT</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
