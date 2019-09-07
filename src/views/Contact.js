import React from 'react';
import { Grid, Image } from 'semantic-ui-react'
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
                        <Grid.Column width={8}>
                            <h1 id='contact-title'>CONTACT US</h1>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }

}