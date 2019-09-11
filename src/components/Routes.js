import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "../views/Home";
import Events from "../views/Events";
import Exec from "../views/Exec";
import Contact from "../views/Contact";
import NotFound from "../views/NotFound";
import NavBar from "./NavBar"
import { Container } from "semantic-ui-react"
import About from "../views/About"
import './Routes.css'

const containerStyle = {
    width: '82.5vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
}

const Routes = () => {
    return (
        <div>
            <Container style={containerStyle}>
                <NavBar />
                <Switch id='switch'>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/events" component={Events} />
                    <Route path="/exec" component={Exec} />
                    <Route path="/contact" component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </Container>
        </div>);
}

export default Routes