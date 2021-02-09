import React from 'react'
import { Col } from 'react-bootstrap'

export default function Infocard({
    title="title",
    caption="caption"
}) {
    return (
        <Col lg={4}>
            <div className="investment">
                <div className="bigColoredText">{title}</div>
                <div>{caption}</div>
            </div>
        </Col>
    )
}
