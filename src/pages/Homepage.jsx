import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Section from '../components/Section'
import proximityImg from '../assets/images/proximity.png'
import cr1 from '../assets/images/cr1.jpeg'
import cr2 from '../assets/images/cr2.jpeg'
import cr3 from '../assets/images/cr3.jpeg'
import PricePlan from '../components/PricePlan'
import ContactForm from '../components/ContactForm'
import GetDetails from '../components/GetDetails'
import FloorPlan from '../components/FloorPlan'

export default function Homepage() {
    const [getContact, setGetContact] = React.useState(false)
    const [showContact, setshowContact] = React.useState(false)
    const [contactDetails, setContactDetails] = React.useState({
        name:"",
        phone:""
    })
    const form = React.useRef()
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
    const gotoForm = (e)=>{
        e.preventDefault()
        window.scrollTo({
            top: form.current.offsetTop,
            left: 0,
            behavior: "smooth"
        })
    }
    return (
        <div>
            <Header 
                onReveal={handleOpen} 
                showNumber={showContact}
                onReserve={gotoForm}
            />
            <Hero 
                onReveal={handleOpen} 
                showNumber={showContact}
                onReserve={gotoForm}
            />
            <Intro />
            <Section
                title="Project Gallery" 
                img={[cr1, cr2, cr3]}
                carousel
            />
            <PricePlan />
            <FloorPlan />
            <Section
                title="Proximity" 
                img={[proximityImg]}
                backgroundColor="#ffffff"
            />
            <ContactForm reference={form} />
            <GetDetails 
                show={getContact}
                onHide={handleClose}
                onChange={onDetailsChange}
                onSubmit={onSubmitDetails}
            />
        </div>
    )
}
