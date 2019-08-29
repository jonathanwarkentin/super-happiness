import React from "react"
import { Link } from "react-router-dom"
import { Menu } from 'semantic-ui-react'

const NavBar = () => {
    return (
        <Menu>
            <Link to="/">
                <Menu.Item>
                    Home
                </Menu.Item>
            </Link>

            <Link to="/exec">
                <Menu.Item>
                    E-Board
                </Menu.Item>
            </Link>

            <Link to="/events">
                <Menu.Item>
                    Events
                </Menu.Item>
            </Link>

            <Link to="contact">
                <Menu.Item>
                    Contact
                </Menu.Item>
            </Link>
        </Menu>
    );
}

export default NavBar