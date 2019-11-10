import React from "react"
import { Link } from "react-router-dom"
import logo from "../img/logo.png"
import "./NavBar.css"
import { slide as Menu } from "react-burger-menu"
import { Responsive } from 'semantic-ui-react'

const NavBar = () => {
    return (
        <div>
            <Responsive as='div' minWidth={Responsive.onlyTablet.minWidth} id="nav-bar">
                <Link to="/">
                    <img id="logo" src={logo} alt="DON'T PANIC! Logo" />
                </Link>
                <Link className='nav-item' to="/about">
                    ABOUT
                </Link>
                <Link className='nav-item' to="/events">
                    EVENTS
                </Link>
                <Link className='nav-item' to="/exec">
                    EXECUTIVE BOARD
                </Link>
                <Link className='nav-item' to="/contact">
                    CONTACT
                </Link>
            </Responsive>
            <Responsive {...Responsive.onlyMobile} as='div' id='mobile-nav'>
                <img id="logo" src={logo} alt="DON'T PANIC! Logo" />
                <Menu right>
                    <Link className='nav-item' to="/">
                        HOME
                    </Link>
                    <Link className='nav-item' to="/about">
                        ABOUT
                    </Link>
                    <Link className='nav-item' to="/events">
                        EVENTS
                    </Link>
                    <Link className='nav-item' to="/exec">
                        EXECUTIVE BOARD
                    </Link>
                    <Link className='nav-item' to="/contact">
                        CONTACT
                    </Link>
                </Menu>
            </Responsive>
        </div>
    );
}

export default NavBar