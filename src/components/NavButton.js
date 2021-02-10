import React from 'react'
import { Navbar } from 'react-bootstrap'

export default function NavButton({
    label
}) {
    const [show, setShow] = React.useState(false)
    return (
        <Navbar.Text onClick={()=>setShow(true)}>
            {
                show ?
                "+233577075706" :
                label
            }
        </Navbar.Text>
    )
}
