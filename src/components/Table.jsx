import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default function Table() {
    return (
        <>
            <div className="bigText">300sqm (OUTRIGHT = N4,500,000)</div>
            <Row>
                <Col>
                    <div className="table">
                        <div className="tableHeader">6 months</div>
                        <div className="tableRow">
                            <div className="left">
                                Initial deposit:
                            </div>
                            <div className="right">
                                <div className="little">N761,382.40</div>
                            </div>
                        </div>
                        <div className="tableRow">
                            <div className="left">
                                Monthly payment:
                            </div>
                            <div className="right">
                                <div className="medium">N761,382.40</div>
                            </div>
                        </div>
                        <div className="tableRow">
                            <div className="left">
                                Total amount:
                            </div>
                            <div className="right">
                                <div className="large">N761,382.40</div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}
