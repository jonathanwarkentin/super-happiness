import React from 'react';
import { Grid, Image } from 'semantic-ui-react'
import googleEvent from '../img/google-event.jpg'
import './About.css'
import { Responsive } from 'semantic-ui-react'

export default class About extends React.Component {
    render() {
        return (
            <div id='about-div'>
                <h1 id='about-title'>ABOUT</h1>
                <Responsive minWidth={768} as={Grid} id='about-grid'>
                    <Grid.Row>
                        <Grid.Column id='text-column' width={8}>
                            <p className='about-text'>
                                DON'T PANIC! was started in the Fall of 2018 with the goal of uniting students from all the disciplines in the Loyola coding community. Our aim since the beginning has been to create a community of people who have a passion and drive to learn and make friends. We aim to serve our community in a variety of ways; first being relaxed meetings where we get together and discuss important topics in the Computer Science field, second being events where we go out and interact with the larger Chicago Coding community, and finally through our Slack channel, where we discuss anything and everything.
                            </p>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Image src={googleEvent} />
                        </Grid.Column>
                    </Grid.Row>
                </Responsive>
                <Responsive maxWidth={767} as='div' id='about-div-mobile'>
                    <Image src={googleEvent} />
                    <br />
                    <p className='about-text-mobile'>
                        DON'T PANIC! was started in the Fall of 2018 with the goal of uniting students from all the disciplines in the Loyola coding community. Our aim since the beginning has been to create a community of people who have a passion and drive to learn and make friends. We aim to serve our community in a variety of ways; first being relaxed meetings where we get together and discuss important topics in the Computer Science field, second being events where we go out and interact with the larger Chicago Coding community, and finally through our Slack channel, where we discuss anything and everything.
                    </p>
                    <br />
                </Responsive>
            </div>
        )
    }

}