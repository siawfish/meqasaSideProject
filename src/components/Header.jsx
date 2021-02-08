import React from 'react'
import { Navbar } from 'react-bootstrap'
import logo from '../../src/assets/images/meqasa-logo-final-transparent.png'

export default function Header() {
    return (
        <Navbar>
            <Navbar.Brand href="#home">
                <img src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Information
                </Navbar.Text>
                <Navbar.Text>
                    Information
                </Navbar.Text>
                <Navbar.Text>
                    Information
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}
