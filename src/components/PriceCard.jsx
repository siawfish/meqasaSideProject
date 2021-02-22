import React from 'react'
import { Col, Table } from 'react-bootstrap'
import { plans } from '../utils/data'

export default function PriceCard({
    duration
}) {
    const row = plans.filter(plan=>{
        return plan.duration===duration
    })
    return (
        <Col sm={12} lg={6}>
            <div style={{marginBottom:20, fontWeight:"bold"}}>{duration} Plan</div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}}>Plot Size</th>
                        <th style={{textAlign:"center"}}>Price</th>
                        <th style={{textAlign:"center"}}>Initial Deposit</th>
                        <th style={{textAlign:"center"}}>Monthly Payment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{backgroundColor:"#262637"}}>
                        <td style={{textAlign:"center", fontWeight:"bold", color:"#fff"}} colSpan="4">Ghana Cedis (&#8373;)</td>
                    </tr>
                    {
                        row.map(plan=>{
                            return (
                                <tr>
                                    <td>{plan.area}</td>
                                    <td>{plan.totalAmount}</td>
                                    <td>{plan.initialDeposit}</td>
                                    <td>{plan.monthlyPayment}</td>
                                </tr>
                            )
                        })
                    }
                    <tr style={{backgroundColor:"#262637"}}>
                        <td style={{textAlign:"center", fontWeight:"bold", color:"#fff"}} colSpan="4">US Dollars ($)</td>
                    </tr>
                    {
                        row.map(plan=>{
                            return (
                                <tr>
                                    <td>{plan.area}</td>
                                    <td>{plan.totalAmountUSD}</td>
                                    <td>{plan.initialDepositUSD}</td>
                                    <td>{plan.monthlyPaymentUSD}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Col>
    )
}
