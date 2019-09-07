import React from 'react';
import { Grid, Image, Button, Form, Message, TextArea } from 'semantic-ui-react'
import csAward from '../img/csaward.jpg'
import './Contact.css'

export default class Contact extends React.Component {
    render() {
        return (
            <div id='contact-div'>
                <Grid id='contact-grid'>
                    <Grid.Row>
                        <Grid.Column id='image-column' width={8}>
                            <Image id='cs-award' src={csAward} />
                        </Grid.Column>
                        <Grid.Column id='form-column' width={8}>
                            <h1 id='contact-title'>CONTACT US</h1>
                            <p id='contact-text'>
                                Let's stay in touch! <br />  Fill in the form below and we'll get back to you ASAP.
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
                            {/* this.state.submitted &&
                                <Message id='success-message'
                                    success
                                    header='Form Completed'
                                    content="Thanks for your message!"
                                /> */
                            }
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }

}