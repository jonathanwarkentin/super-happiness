import React from 'react';
import './Home.css'
import { Responsive } from 'semantic-ui-react'

export default class Contact extends React.Component {
    render() {
        return (
            <div id='home-text'>
                <div>
                    <span id='welcome-to'>WELCOME TO</span>
                    <br />
                    {/* <Responsive as='br' minAspect={16 / 9} /> */}
                    <span id='loyola'>LOYOLA  </span><span id='university'>UNIVERSITY</span>
                    {/* <Responsive as='br' minAspect={16 / 9} /> */}
                    <br />
                    <span id='chicago-coding'><span id='chicago'>CHICAGO'S</span><span id='coding'>CODING</span></span>
                    <Responsive as='br' minAspect={16 / 9} />
                    <span id='community'>COMMUNITY</span>
                    <br />
                    <span id='byte'>We might just byte you, though. Got it? Byte. Ha haha hahahaha.</span>
                </div>
            </div>
        )
    }

}