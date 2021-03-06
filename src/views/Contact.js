import React from 'react';
import { Grid, Image, Button, Form, TextArea, Responsive } from 'semantic-ui-react'
import csAward from '../img/csaward.jpg'
import slackLogo from '../img/slack-logo-edited.png'
import './Contact.css'

export default class Contact extends React.Component {
    render() {
        return (
            <div id='contact-div'>
                <Responsive as={Grid} minWidth={992} id='contact-grid'>
                    <Grid.Row>
                        <Grid.Column id='image-column' width={8}>
                            <Image id='cs-award' src={csAward} />
                        </Grid.Column>
                        <Grid.Column id='form-column' width={8}>
                            <h1 id='contact-title'>CONTACT US</h1>
                            <div id='contact-text'>
                                <a target="_blank" id="join-slack-link" href="https://join.slack.com/t/dontpaniccs/signup"><Image id="slack-logo" src={slackLogo} /><span>Join our Slack!</span></a>
                                <br />
                                <p>Are you looking for a place with CS folks that like to geek out, learn some CS, make friends, and be in a judgment free zone and a helpful environment? Look no further. Just fill in the form below and we'll get back to you ASAP.</p>
                            </div>
                            <Form id="form" action="https://formspree.io/dontpanic.luc@gmail.com" method="POST">
                                <Form.Field required>
                                    <Form.Input name="name" type="text" placeholder='Name' />
                                </Form.Field>
                                <Form.Field required>
                                    <Form.Input name="email" type="email" placeholder='Email' />
                                </Form.Field>
                                <TextArea name="message" required placeholder='Message' />
                                <Button id='submit' type='submit'>Submit</Button>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Responsive>
                <Responsive maxWidth={991} as='div' id='contact-grid'>
                    <h1 id='contact-title'>CONTACT US</h1>
                    <div id='image-wrapper'>
                        <Image id='cs-award' src={csAward} />
                    </div>
                    <p id='contact-text'>
                        <a target="_blank" id="join-slack-link" href="https://join.slack.com/t/dontpaniccs/signup"><Image id="slack-logo" src={slackLogo} /><span>Join our Slack!</span></a>
                        <br />
                        Are you looking for a place with CS folks that like to geek out, learn some CS, make friends, and be in a judgment free zone and a helpful environment? Look no further. Just fill in the form below and we'll get back to you ASAP.
                    </p>
                    <Form id="form" action="https://formspree.io/dontpanic.luc@gmail.com" method="POST">
                        <Form.Field required>
                            <Form.Input name="name" type="text" placeholder='Name' />
                        </Form.Field>
                        <Form.Field required>
                            <Form.Input name="email" type="email" placeholder='Email' />
                        </Form.Field>
                        <TextArea name="message" required placeholder='Message' />
                        <Button id='submit' type='submit'>Submit</Button>
                    </Form>
                    <br />
                </Responsive>
            </div>
        )
    }

}