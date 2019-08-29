import React from "react"
import { Route, Switch, Link } from "react-router-dom"
import Home from "../views/Home";
import Events from "../views/Events";
import Exec from "../views/Exec";
import Contact from "../views/Contact";
import NotFound from "../views/NotFound";

const Routes = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/exec">Exec</Link>
                </li>
                <li>
                    <Link to="/events">Events</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
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