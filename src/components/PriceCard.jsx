import React from 'react'
import { Col, Table } from 'react-bootstrap'
import { oneYearPlan, twoYearsPlan } from '../utils/data'
import numeral from 'numeral'

export default function PriceCard({
    duration
}) {
    let plan = []
    if(duration==="One Year"){
        plan = oneYearPlan
    } else {
        plan = twoYearsPlan
    }
    return (
        <Col sm={12} lg={6}>
            <div style={{marginBottom:20, fontWeight:"bold"}}>{duration} Plan</div>
            <Table striped bordered responsive hover>
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
                        plan.map(plan=>{
                            let initialDeposit = 20/100 * plan.price
                            let monthlyPayment
                            if(plan.duration==="One Year"){
                                monthlyPayment = (plan.price - initialDeposit)/12
                            } else {
                                monthlyPayment = (plan.price - initialDeposit)/24
                            } 
                            return (
                                <tr>
                                    <td>{plan.area}</td>
                                    <td>{numeral(plan.price).format("0,0.00")}</td>
                                    <td>{numeral(initialDeposit).format("0,0.00")}</td>
                                    <td>{numeral(monthlyPayment).format("0,0.00")}</td>
                                </tr>
                            )
                        })
                    }
                    <tr style={{backgroundColor:"#262637"}}>
                        <td style={{textAlign:"center", fontWeight:"bold", color:"#fff"}} colSpan="4">US Dollars ($)</td>
                    </tr>
                    {
                        plan.map(plan=>{
                            let initialDeposit = 20/100 * plan.priceUSD
                            let monthlyPayment
                            if(plan.duration==="One Year"){
                                monthlyPayment = (plan.priceUSD - initialDeposit)/12
                            } else if(plan.duration==="Two Year"){
                                monthlyPayment = (plan.priceUSD - initialDeposit)/24
                            }
                            return (
                                <tr>
                                    <td>{plan.area}</td>
                                    <td>{numeral(plan.priceUSD).format("0,0.00")}</td>
                                    <td>{numeral(initialDeposit).format("0,0.00")}</td>
                                    <td>{numeral(monthlyPayment).format("0,0.00")}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Col>
    )
}
