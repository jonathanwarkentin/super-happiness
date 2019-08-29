import React from "react"
import { Route } from "react-router-dom"
import Home from "../views/Home";
import Events from "../views/Events";
import Exec from "../views/Exec";
import Contact from "../views/Contact";

const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/exec" component={Exec} />
            <Route path="/events" component={Events} />
            <Route path="/contact" component={Contact} />
        </div>);
}

export default Routes