import React from "react"
import { Link } from "react-router-dom"
import { Menu } from 'semantic-ui-react'

export default class NavBar extends React.Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                <Link to="/">
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    >
                        Home
                    </Menu.Item>
                </Link>

                <Link to="/exec">
                    <Menu.Item
                        name='exec'
                        active={activeItem === 'exec'}
                        onClick={this.handleItemClick}
                    >
                        E-Board
                    </Menu.Item>
                </Link>

                <Link to="/events">
                    <Menu.Item
                        name='events'
                        active={activeItem === 'events'}
                        onClick={this.handleItemClick}
                    >
                        Events
                    </Menu.Item>
                </Link>

                <Link to="contact">
                    <Menu.Item
                        name='contact'
                        active={activeItem === 'contact'}
                        onClick={this.handleItemClick}
                    >
                        Contact
                    </Menu.Item>
                </Link>
            </Menu>
        );
    }
}