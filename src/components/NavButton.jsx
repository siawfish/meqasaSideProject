import React from 'react'
import { Navbar } from 'react-bootstrap'

export default function NavButton({
    label,
    onReveal,
    show=false
}) {
    return (
        <Navbar.Text onClick={onReveal}>
            {
                show ?
                "+233577075706" :
                label
            }
        </Navbar.Text>
    )
}
