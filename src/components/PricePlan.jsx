import React from 'react'
import { Container } from 'react-bootstrap'
import Table from './Table'

export default function PricePlan() {
    return (
        <Container className="pricePlan" fluid>
            <div className="biggerText">Price plan</div>
            <Table />
        </Container>
    )
}
