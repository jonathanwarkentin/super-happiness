import React from 'react';
import './Home.css'
import { Responsive } from 'semantic-ui-react'

export default class Home extends React.Component {
    render() {
        return (
            <div id='home-text'>
                <Responsive minWidth={Responsive.onlyTablet.minWidth} as='div' id='desktop-home-div'>
                    <span id='welcome-to'>WELCOME TO</span>
                    <br />
                    <span id='loyola'>LOYOLA  </span><span id='university'>UNIVERSITY</span>
                    <br />
                    <span id='chicago-coding'><span id='chicago'>CHICAGO'S</span><span id='coding'>CODING</span></span>
                    <span id='community'>COMMUNITY</span>
                </Responsive>
                <Responsive {...Responsive.onlyMobile} as='div' id='mobile-home-div'>
                    <div id='welcome-div'>
                        <span id='welcome-to'>WELCOME TO</span>
                        <br />
                    </div>
                    <div id='loyola-div'>
                        <span id='loyola'>LOYOLA</span>
                        <br />
                        <span id='university'>UNIVERSITY</span>
                        <br />
                        <span id='chicago'>CHICAGO'S</span>
                        <br />
                    </div>
                    <div id='coding-div'>
                        <span id='coding'>CODING</span>
                        <br />
                        <span id='community'>COMMUNITY</span>
                    </div>
                </Responsive>
            </div>
        )
    }

}