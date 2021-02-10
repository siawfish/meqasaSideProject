import React from 'react'
import { Row, Col, Card, Accordion, Button } from 'react-bootstrap'
import { GoPlus } from 'react-icons/go'
import { BiMinus } from 'react-icons/bi'

export default function QandA({
    question,
    answer
}) {
    const [open, setOpen] = React.useState(false)
    return (
        <Row>
            <Col>
                <Accordion style={{marginBottom:20}}>
                    <Card>
                        <Accordion.Toggle onClick={()=>setOpen(!open)} as={Card.Header} eventKey="0">
                            {question}
                            <Button>
                                {
                                    !open ? 
                                    <GoPlus /> :
                                    <BiMinus />
                                }
                            </Button>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>{answer}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Col>
        </Row>
    )
}
