import React from 'react'
import { Navbar } from 'react-bootstrap'
import logo from '../../src/assets/images/meqasa-logo-final-transparent.png'
import NavButton from './NavButton'

export default function Header({
    onReveal,
    number,
    onReserve
}) {
    return (
        <Navbar>
            <Navbar.Brand href="#home">
                <img src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <NavButton
                    label="0577**** View Phone"    
                    onReveal={onReveal}
                    number={number}
                />
                <NavButton
                    label="RESERVE PLOT"    
                    onReveal={onReserve}
                />
            </Navbar.Collapse>
        </Navbar>
    )
}
