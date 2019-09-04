import React from "react"
import { Menu } from "semantic-ui-react"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <Menu borderless widths={5}>
            <Menu.Item>
                <Link to="/">
                    Home
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/about">
                    About
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/events">
                    Events
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/exec">
                    Executive Board
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/contact">
                    Contact
                </Link>
            </Menu.Item>
        </Menu >
    );
}

export default NavBar