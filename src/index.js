import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./components/Routes"
import { Router } from "react-router-dom"
import createHistory from "history/createBrowserHistory"
import 'semantic-ui-css/semantic.min.css'
const history = createHistory()

ReactDOM.render(
    <Router history={history}>
        <Routes />
    </Router>,
    document.getElementById('root'));