import React from 'react'
import { Col, Table } from 'react-bootstrap'
import { plans } from '../utils/data'

export default function PriceCard() {
    return (
        <Col sm={12} lg={12}>
            <Table striped bordered responsive hover>
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}}>Plot type (ft)</th>
                        <th style={{textAlign:"center"}}>Land area (sqm)</th>
                        <th style={{textAlign:"center"}}>Price (USD)</th>
                        <th style={{textAlign:"center"}}>Price (GHS)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        plans.map(plan=>{
                            return (
                                <tr>
                                    <td style={{textAlign:"center"}}>{plan.plot}</td>
                                    <td style={{textAlign:"center"}}>{plan.area}</td>
                                    <td style={{textAlign:"center"}}>{plan.price}</td>
                                    <td style={{textAlign:"center"}}>{plan.priceUSD}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Col>
    )
}
