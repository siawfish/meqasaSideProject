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
import PricePlan from '../components/PricePlan'
import ContactForm from '../components/ContactForm'
import FAQ from '../components/FAQ'
import About from '../components/About'
import { Modal, Button, Form } from 'react-bootstrap'

export default function Homepage() {
    const [getContact, setGetContact] = React.useState(false)
    const [showContact, setshowContact] = React.useState(false)
    const [contactDetails, setContactDetails] = React.useState({
        name:"",
        phone:""
    })
    const handleOpen = ()=> {
        setGetContact(true)
    }
    const handleClose = ()=> {
        setGetContact(false)
    }
    const onSubmitDetails = ()=> {
        console.log(contactDetails)
        handleClose()
        setshowContact(true)
    }
    const onDetailsChange = (name,e)=> {
        setContactDetails({
            ...contactDetails,
            [name]:e.target.value
        })
    }
    return (
        <div>
            <Header 
                onReveal={handleOpen} 
                showNumber={showContact}
            />
            <Hero 
                onReveal={handleOpen} 
                showNumber={showContact}
            />
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
            <Modal show={getContact} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Reveal Number</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <small>
                        To view number, first enter your contact info (Do this once only). 
                        If you are unable to reach the owner/broker, then they can reach you.
                    </small>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(e)=>onDetailsChange("name", e)} type="text" placeholder="Enter full name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control onChange={(e)=>onDetailsChange("phone", e)} type="tel" placeholder="Enter phone number" />
                    </Form.Group>
                    <Button onClick={onSubmitDetails} block variant="primary" type="submit">
                        Submit
                    </Button>
                </Modal.Body>
            </Modal>
            <About />
        </div>
    )
}
