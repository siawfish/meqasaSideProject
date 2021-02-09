import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Intro from '../components/Intro'

export default function Homepage() {
    return (
        <div>
            <Header />
            <Hero />
            <Intro />
        </div>
    )
}
