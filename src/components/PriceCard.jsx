import React from 'react'
import { Col } from 'react-bootstrap'

export default function PriceCard({
    duration,
    area,
    price,
    initialDeposit,
    monthlyPayment,
    totalAmount
}) {
    return (
        <Col sm={12} lg={4}>
            <div className="priceCard">
                <div className="colorbg"></div>
                <div className="duration">{duration}</div>
                <div className="area">{area}</div>
                <div className="price">Price: &#8373;{price}</div>
                <div className="list">Initial deposit: <span className="amount">&#8373;{initialDeposit}</span></div>
                <div className="list">Monthly payment: <span className="amount">&#8373;{monthlyPayment}</span></div>
                <div className="list">Total amount: <span className="amount">&#8373;{totalAmount}</span></div>
            </div>
        </Col>
    )
}
