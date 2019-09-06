import React from "react"
import { Link } from "react-router-dom"
import logo from "../img/logo.png"
import "./NavBar.css"

const NavBar = () => {
    return (
        <div id="nav-bar">

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

        </div >
    );
}

export default NavBar