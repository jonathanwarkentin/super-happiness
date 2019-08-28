import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/Home.js';
import Events from './views/Events.js';
import Exec from './views/Exec.js';
import Contact from './views/Contact.js';
import 'semantic-ui-css/semantic.min.css'
import { Router, Route, IndexRoute, hashHistory } from "react-router";

ReactDOM.render(
<Router history={hashHistory}>
    <Route path="/" component={Home}>
        <Route path="events" component={Events}></Route>
        <Route path="exec" component={Exec}></Route>
        <Route path="contact" component={Contact}></Route>
    </Route>
</Router>, 
document.getElementById('root'));