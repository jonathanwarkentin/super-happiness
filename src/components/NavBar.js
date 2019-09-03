import React from "react"
import { Menu } from "semantic-ui-react"

const NavBar = () => {
    return (
        <Menu borderless widths={5}>
            <Menu.Item>
                Home
            </Menu.Item>
            <Menu.Item>
                About
            </Menu.Item>
            <Menu.Item>
                Events
            </Menu.Item>
            <Menu.Item>
                Exec
            </Menu.Item>
            <Menu.Item>
                Contact
            </Menu.Item>
        </Menu >
    );
}

export default NavBar