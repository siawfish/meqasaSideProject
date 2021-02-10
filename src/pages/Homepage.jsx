import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import floorplan from '../assets/images/floor-plan.png'
import Section from '../components/Section'
import proximityImg from '../assets/images/proximity-img.png'
import cr1 from '../assets/images/cr1.jpg'
import cr2 from '../assets/images/cr2.jpg'
import cr3 from '../assets/images/cr3.jpg'
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap'
import PricePlan from '../components/PricePlan'
import ContactForm from '../components/ContactForm'
import FAQ from '../components/FAQ'

export default function Homepage() {
    return (
        <div>
            <Header />
            <Hero />
            <Intro />
            <Section
                title="Floor Plan" 
                img={[floorplan]}
            />
            <Section
                title="Proximity" 
                img={[proximityImg]}
                backgroundColor="#ffffff"
            />
            <Section
                title="Project Gallery" 
                img={[cr1, cr2, cr3]}
                carousel
            />
             <Section
                title="Neighbourhood" 
                neighbourhood
                backgroundColor="#ffffff"
            />
             <Section
                title="Why you should invest in Silver Spring Resident Phase II" 
                investment
            />
            <PricePlan />
            <ContactForm />
            <FAQ />
        </div>
    )
}
