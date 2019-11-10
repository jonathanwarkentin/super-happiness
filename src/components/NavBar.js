import React from "react"
import { Link } from "react-router-dom"
import logo from "../img/logo.png"
import "./NavBar.css"
import { slide as Menu } from "react-burger-menu"
import { Responsive } from 'semantic-ui-react'

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen })
    }

    closeMenu() {
        this.setState({ menuOpen: false })
    }

    toggleMenu() {
        this.setState(state => ({ menuOpen: !state.menuOpen }))
    }

    render() {
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
                    <Menu disableAutoFocus right isOpen={this.state.menuOpen}
                        onStateChange={(state) => this.handleStateChange(state)}>
                        <Link onClick={() => this.closeMenu()} className='nav-item' to="/">
                            HOME
                        </Link>
                        <Link onClick={() => this.closeMenu()} className='nav-item' to="/about">
                            ABOUT
                        </Link>
                        <Link onClick={() => this.closeMenu()} className='nav-item' to="/events">
                            EVENTS
                        </Link>
                        <Link onClick={() => this.closeMenu()} className='nav-item' to="/exec">
                            EXECUTIVE BOARD
                        </Link>
                        <Link onClick={() => this.closeMenu()} className='nav-item' to="/contact">
                            CONTACT
                        </Link>
                    </Menu>
                </Responsive>
            </div>
        )
    }
}

export default NavBar