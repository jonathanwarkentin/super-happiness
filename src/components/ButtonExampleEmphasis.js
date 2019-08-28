import React from 'react'
import { Button } from 'semantic-ui-react';
import { Link } from "react-router";

export default class ButtonExampleEmphasis extends React.Component{ 
    render() {
    return(
    <div>
        <Link to="contact"><Button primary>Contact</Button></Link>
        <Link to="events"><Button secondary>Events</Button></Link>
        {this.props.children}
    </div>
    )
    }

}