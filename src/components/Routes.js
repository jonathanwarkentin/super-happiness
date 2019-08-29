import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "../views/Home";
import Events from "../views/Events";
import Exec from "../views/Exec";
import Contact from "../views/Contact";
import NotFound from "../views/NotFound";
import NavBar from "./NavBar"

const Routes = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/exec" component={Exec} />
                <Route path="/events" component={Events} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
            </Switch>
        </div>);
}

export default Routes