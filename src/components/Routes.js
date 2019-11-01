import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "../views/Home";
import Events from "../views/Events";
import Exec from "../views/Exec";
import Contact from "../views/Contact";
import NotFound from "../views/NotFound";
import NavBar from "./NavBar"
import { Container, Responsive } from "semantic-ui-react"
import About from "../views/About"
import './Routes.css'

const containerStyle = {
    width: '82.5vw',
    height: '100vh',
    overflow: 'hidden'
}

const containerMobileStyle = {
    width: '95vw',
    overflowX: 'hidden',
    overflowY: 'visible'
}

const Routes = () => {
    return (
        <div>
            <Responsive {...Responsive.onlyComputer} as={Container} style={containerStyle}>
                <NavBar />
                <Switch id='switch'>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/events" component={Events} />
                    <Route path="/exec" component={Exec} />
                    <Route path="/contact" component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </Responsive>
            <Responsive {...Responsive.onlyMobile} as={Container} style={containerMobileStyle}>
                <Switch id='switch' style={containerMobileStyle}>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/events" component={Events} />
                    <Route path="/exec" component={Exec} />
                    <Route path="/contact" component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </Responsive>
        </div>);
}

export default Routes