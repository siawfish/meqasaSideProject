import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default function Table({
    heading,
    title,
    initialDeposit,
    monthlyPayment,
    totalAmount
}) {
    return (
        <>
            <div className="bigText">{heading}</div>
            <Row>
                <Col>
                    <div className="table">
                        <div className="tableHeader">{title}</div>
                        <div className="tableRow">
                            <div className="left">
                                Initial deposit:
                            </div>
                            <div className="right">
                                <div className="little">{initialDeposit}</div>
                            </div>
                        </div>
                        <div className="tableRow">
                            <div className="left">
                                Monthly payment:
                            </div>
                            <div className="right">
                                <div className="medium">{monthlyPayment}</div>
                            </div>
                        </div>
                        <div className="tableRow">
                            <div className="left">
                                Total amount:
                            </div>
                            <div className="right">
                                <div className="large">{totalAmount}</div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}
