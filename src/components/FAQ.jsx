import React from 'react'
import { Container } from 'react-bootstrap'
import QandA from './QandA'
import { faqs } from '../utils/data'

export default function FAQ() {
    return (
        <Container className="faq" fluid>
            <div className="bigText">Frequently asked questions</div>
            {
                faqs.map((faq,i)=>{
                    return (
                        <QandA
                            question={faq.q} 
                            answer={faq.a}
                        />
                    )
                })
            }
        </Container>
    )
}
