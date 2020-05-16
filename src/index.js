import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./components/Routes"
import { Router } from "react-router-dom"
import { createBrowserHistory } from 'history'
import 'semantic-ui-css/semantic.min.css'
// Comment out one of the 2 lines below depending on if you're deploying
// to dev (GitHub pages) or production (Apache server)
const history = createBrowserHistory({ basename: '/super-happiness' }); // for GH Pages
// const history = createBrowserHistory({ basename: '/' }); // for Apache

ReactDOM.render(
    <Router history={history}>
        <Routes />
    </Router>,
    document.getElementById('root'));