import React from 'react'
import { Navbar } from 'react-bootstrap'

export default function NavButton({
    label,
    onReveal,
    number
}) {
    return (
        <Navbar.Text onClick={onReveal}>
            { number || label }
        </Navbar.Text>
    )
}
