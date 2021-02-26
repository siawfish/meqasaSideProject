import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Section from '../components/Section'
import proximityImg from '../assets/images/proximity.png'
import cr3 from '../assets/images/cr3.jpg'
import cr5 from '../assets/images/cr5.jpg'
import cr4 from '../assets/images/cr4.jpg'
import cr6 from '../assets/images/cr6.jpg'
import PricePlan from '../components/PricePlan'
import ContactForm from '../components/ContactForm'
import GetDetails from '../components/GetDetails'
import FloorPlan from '../components/FloorPlan'
import { create } from 'apisauce'

const api = create({
    baseURL: 'https://meqasa.com/',
    headers: { 
        Accept: 'application/vnd.github.v3+json' 
    }
})

export default function Homepage() {
    const [getContact, setGetContact] = React.useState(false)
    const [contact, setContact] = React.useState("0244 **** View Phone")
    const [contactDetails, setContactDetails] = React.useState({
        name:"",
        phone:"",
        uid:1717
    })
    const [err, setErr] = React.useState("")
    const form = React.useRef()

    const handleOpen = ()=> {
        setGetContact(true)
    }

    const handleClose = ()=> {
        setErr("")
        setGetContact(false)
    }

    const onSubmitDetails = ()=> {
        if(contactDetails.name.length<4){
            setErr("Kindly enter a valid name")
            return
        } else if(contactDetails.phone.length<10){
            setErr("Kindly enter a valid phone")
            return
        } else {
            api.post("commune", contactDetails)
            .then(res=>{
                if(res.ok){
                    if(res.data.status==="success"){
                        setContact(res.data.p)
                        handleClose()
                    } else {
                        setErr("Sorry request failed. Please try again")
                    }
                } else {
                    setErr(res.problem)
                }
            })
            .catch(e=>console.log(e))
        }
        
    }

    const onDetailsChange = (name,e)=> {
        setErr("")
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
                number={contact}
                onReserve={gotoForm}
            />
            <Hero 
                onReveal={handleOpen} 
                number={contact}
                onReserve={gotoForm}
            />
            <Intro />
            <Section
                title="Project Gallery" 
                img={[cr3, cr4, cr5, cr6]}
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
                err={err}
            />
        </div>
    )
}
