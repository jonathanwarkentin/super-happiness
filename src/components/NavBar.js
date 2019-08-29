import React from "react"
import { Link } from "react-router-dom"
import { Menu } from 'semantic-ui-react'
import './NavBar.css'
import logo from '../img/logo.svg'

console.log(logo);

const NavBar = () => {
    return (
        <Menu id="navbar" size="massive">
            <Link to="/">
                <Menu.Item link id="home">
                    <img id="logo" src={logo} alt="DON'T PANIC! Logo" />
                </Menu.Item>
            </Link>

            <Link to="/exec">
                <Menu.Item class="menu-item" link>
                    E-Board
                </Menu.Item>
            </Link>

            <Link to="/events">
                <Menu.Item class="menu-item" link>
                    Events
                </Menu.Item>
            </Link>

            <Link to="contact">
                <Menu.Item class="menu-item" link>
                    Contact
                </Menu.Item>
            </Link>
        </Menu>
    );
}

export default NavBar