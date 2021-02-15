import React from 'react'
import { Col } from 'react-bootstrap'
import { FaCar, FaWalking } from 'react-icons/fa'

export default function ProxyCard({
    heading="Heading",
    amount="0.0",
    eta="0 mins to destination",
    mode="vehicle"
}) {
    const renderIcon = ()=> {
        if(mode==="vehicle"){
            return <FaCar />
        }
        if(mode==="walk"){
            return <FaWalking />
        }
    }
    return (
        <Col style={{padding:0}} sm={12} md={4} lg={2}>
            <div className="neighbourhood">
                <div className="head">
                    {heading}
                </div>
                <div className="content">
                    <div className="amount">&#8373;{amount}m</div>
                    <div className="etaWrapper">
                        <div className="eta">{eta}</div>

                        <div className="icon">
                            {
                                renderIcon()
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}
