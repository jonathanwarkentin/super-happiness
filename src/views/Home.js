import React from 'react';
import ButtonExampleEmphasis from '../components/ButtonExampleEmphasis';
import { Button } from 'semantic-ui-react';
import { Link } from "react-router";

export default class Contact extends React.Component{ 
    render() {
    return(
    <div>
        <h1>Welcome to DON'T PANIC!</h1>
        <Link to="contact"><Button primary>Contact</Button></Link>
        <Link to="events"><Button primary>Events</Button></Link>
        <Link to="exec"><Button primary>Exec</Button></Link>
        <Link to="home"><Button primary>Home</Button></Link>
        {this.props.children}
    </div>
    )
    }

}