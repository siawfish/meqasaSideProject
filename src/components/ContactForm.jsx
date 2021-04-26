import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { create } from 'apisauce'

const api = create({
    baseURL: 'https://meqasa.com/',
    headers: { 
        Accept: 'application/vnd.github.v3+json' 
    }
})

export default function ContactForm({
    reference
}) {
    const [details, setDetails] = React.useState({
        name:"",
        phone:"",
        email:"",
        address:"",
        country:"",
        plots:"",
        where:"",
        comment:"",
        bymail:false,
        bysms:false,
        byphone:false,
        bywhats:false,
        uid:1717
    })
    const nameInput = React.useRef(null)
    const phoneInput = React.useRef(null)
    const emailInput = React.useRef(null)
    const contactForm = React.useRef(null)
    const [err, setErr] = React.useState("")
    const [success, setSuccess] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)
    
    const resetForm = ()=> {
        contactForm.current.reset()
        setDetails({
            name:"",
            phone:"",
            email:"",
            country:"",
            plots:"",
            where:"",
            comment:"",
            bymail:false,
            bysms:false,
            byphone:false,
            bywhats:false,
            uid:1717
        })
    }

    const onChange = (name, e)=> {
        setErr("")
        if(name==="bymail"||name==="bysms"||name==="byphone"||name==="bywhats"){
            setDetails({
                ...details,
                [name]:e
            })
        } else {
            setDetails({
                ...details,
                [name]:e.target.value
            })
        }
        if(name==="name"){
            nameInput.current.style.borderColor = "#ced4da"
        }
        if(name==="email"){
            emailInput.current.style.borderColor = "#ced4da"
        }
        if(name==="phone"){
            phoneInput.current.style.borderColor = "#ced4da"
        }
    }

    const validate = ()=> {
        const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(details.name.length<3){
            nameInput.current.style.borderColor = "red"
            nameInput.current.style.borderWidth = 1
            nameInput.current.focus()
            setErr("Kindly enter a valid name")
            return false
        }
        if(!details.email.match(mailformat)){
            emailInput.current.style.borderColor = "red"
            emailInput.current.style.borderWidth = 1
            emailInput.current.focus()
            setErr("Kindly enter a valid email")
            return false
        }
        if(details.phone.length<10){
            phoneInput.current.style.borderColor = "red"
            phoneInput.current.style.borderWidth = 1
            phoneInput.current.focus()
            setErr("Kindly enter a valid phone number")
            return false
        }
        return true
    }

    const decypherContactChannel = ()=> {
        const obj = {
            ...details,
            bymail:details.bymail?"email":undefined,
            byphone:details.byphone?"phone":undefined,
            bywhats:details.bywhats?"whatsapp":undefined,
            bysms:details.bysms?"sms":undefined
        }
        return obj
    }

    const onSubmit = (e)=> {
        e.preventDefault()
        setIsLoading(true)
        setErr("")
        if(!validate()){
            setIsLoading(false)
            return
        }
        api.post('p-reserve', decypherContactChannel())
        .then(res=>{
            if(res.ok){
                if(res.data.status==="success"){
                    setIsLoading(false)
                    setSuccess("Thanks for showing interest. You will be contacted by an agent very soon.")
                    resetForm()
                } else {
                    setIsLoading(false)
                    setErr("Sorry request failed. Please try again")
                }
            } else {
                setIsLoading(false)
                setErr(res.problem)
            }
        })
        .catch(e=>{
            setIsLoading(false)
            console.log(e)
        })
    }
    
    return (
        <Container ref={reference} className="contactForm" fluid>
            <div className="biggerText">Register your interest</div>
            <Row>
                <Col>
                    <Form ref={contactForm}>
                        <div className="err">{err}</div>
                        <div className="success">{success}</div>
                        <Form.Group controlId="name">
                            <Form.Control 
                                ref={nameInput}
                                onChange={(e)=>onChange("name",e)} 
                                defaultValue={details.name} size="lg" 
                                placeholder="Enter full name" 
                            />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="email">
                                <Form.Control 
                                    ref={emailInput}
                                    onChange={(e)=>onChange("email",e)} 
                                    defaultValue={details.email} 
                                    size="lg" 
                                    type="email" 
                                    placeholder="Enter email" 
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="phone">
                                <Form.Control 
                                    ref={phoneInput}
                                    onChange={(e)=>onChange("phone",e)} 
                                    defaultValue={details.phone} 
                                    size="lg" 
                                    type="number" 
                                    placeholder="Enter phone number" 
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="country">
                            <Form.Control 
                                onChange={(e)=>onChange("country",e)} 
                                defaultValue={details.country} 
                                size="lg" 
                                type="text" 
                                placeholder="Country" 
                            />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="plots">
                                <Form.Control 
                                    onChange={(e)=>onChange("plots",e)} 
                                    defaultValue={details.plots} 
                                    size="lg" 
                                    type="number" 
                                    placeholder="Number of plots" 
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="reference">
                                <Form.Control 
                                    onChange={(e)=>onChange("where",e)} 
                                    defaultValue={details.where} 
                                    size="lg" 
                                    type="text" 
                                    placeholder="Where did you hear about us" 
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="comments">
                            <Form.Control 
                                onChange={(e)=>onChange("comment",e)} 
                                defaultValue={details.comment} 
                                size="lg" 
                                placeholder="Comments" 
                                as="textarea" 
                                rows={4} 
                            />
                        </Form.Group>
                        <div className="thickText">If you would like to receive exclusive news and offers from meqasa.com.</div>
                        <div className="thickText">Co, please select your preferred method of communication below:</div>
                        <div className="checkboxWrapper">
                            <Form.Check  
                                onChange={(e)=>onChange("bymail",!details.bymail)} 
                                inline 
                                label="Email" 
                                type='checkbox' 
                            />
                            <Form.Check 
                                onChange={(e)=>onChange("bysms",!details.bysms)} 
                                inline 
                                label="SMS" 
                                type='checkbox' 
                            />
                            <Form.Check
                                inline
                                label="Phone"
                                type={'checkbox'}
                                onChange={(e)=>onChange("byphone",!details.byphone)}
                            />
                            <Form.Check
                                inline
                                label="Whatsapp"
                                type={'checkbox'}
                                onChange={(e)=>onChange("bywhats",!details.bywhats)}
                            />
                        </div>
                        <Button onClick={onSubmit}>
                            {
                                !isLoading ?
                                "SUBMIT" :
                                "SUBMITTING..."
                            }
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
