import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "../views/Home";
import Events from "../views/Events";
import Exec from "../views/Exec";
import Contact from "../views/Contact";
import NotFound from "../views/NotFound";
import NavBar from "./NavBar"
import { Container, Card } from "semantic-ui-react";
import './Routes.css'

const Routes = () => {
    return (
        <div>
            <Container>
                <NavBar />
                <Card id="card">
                    <Card.Content>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/exec" component={Exec} />
                            <Route path="/events" component={Events} />
                            <Route path="/contact" component={Contact} />
                            <Route component={NotFound} />
                        </Switch>
                    </Card.Content>
                </Card>
            </Container>
        </div>);
}

export default Routes