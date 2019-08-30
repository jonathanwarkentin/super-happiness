import React from "react"
import { Link } from "react-router-dom"
import { Menu } from 'semantic-ui-react'
import './NavBar.css'
import logo from '../img/logo.svg'

const NavBar = () => {
    return (
        <Menu id="navbar" size="massive">
            <Link to="/">
                <Menu.Item className="menu-item" link>
                    <img id="logo" src={logo} alt="DON'T PANIC! Logo" />
                </Menu.Item>
            </Link>

            <Link to="/exec">
                <Menu.Item className="menu-item" link>
                    E-Board
                </Menu.Item>
            </Link>

            <Link to="/events">
                <Menu.Item className="menu-item" link>
                    Events
                </Menu.Item>
            </Link>

            <Link to="contact">
                <Menu.Item className="menu-item" link>
                    Contact
                </Menu.Item>
            </Link>
        </Menu>
    );
}

export default NavBar