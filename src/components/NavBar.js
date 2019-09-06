import React from "react"
import { Menu, Header } from "semantic-ui-react"
import { Link } from "react-router-dom"
import logo from "../img/logo.png"
import "./NavBar.css"

const navStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    borderWidth: '0px',
    boxShadow: 'none'
}

const NavBar = () => {
    return (
        <Menu borderless style={navStyle}>
            <Menu.Item>
                <Link to="/">
                    <img id="logo" src={logo} alt="DON'T PANIC! Logo" />
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link className='nav-item' to="/about">
                    ABOUT
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link className='nav-item' to="/events">
                    EVENTS
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link className='nav-item' to="/exec">
                    EXECUTIVE BOARD
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link className='nav-item' to="/contact">
                    CONTACT
                </Link>
            </Menu.Item>
        </Menu >
    );
}

export default NavBar