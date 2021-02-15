import React from 'react'
import { Col } from 'react-bootstrap'

export default function PriceCard({
    heading,
    title,
    initialDeposit,
    monthlyPayment,
    totalAmount
}) {
    return (
        <Col sm={12} lg={4}>
            <div className="priceCard">
                <div className="colorbg"></div>
                <div className="duration">6 months</div>
                <div className="area">300sqm</div>
                <div className="price">Price: N4,500,000</div>
                <div className="list">Initial deposit: <span className="amount">N761,382.40</span></div>
                <div className="list">Monthly payment: <span className="amount">N761,382.40</span></div>
                <div className="list">Total amount: <span className="amount">N761,382.40</span></div>
            </div>
        </Col>
    )
}
