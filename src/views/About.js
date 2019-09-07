import React from 'react';
import { Grid, Image } from 'semantic-ui-react'
import googleEvent from '../img/google-event.jpg'
import './About.css'

export default class About extends React.Component {
    render() {
        return (
            <div id='about-div'>
                <h1 id='title'>ABOUT</h1>
                <Grid id='grid'>
                    <Grid.Row>
                        <Grid.Column id='text-column' width={8}>
                            <p className='about-text'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus natus odio impedit beatae omnis quaerat asperiores delectus illum maiores eos veritatis, nesciunt pariatur sint. Aliquam vero labore repudiandae error ab.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, soluta quibusdam similique magnam nesciunt voluptates! Unde aliquam consectetur nesciunt delectus ratione doloribus fuga doloremque officia! Necessitatibus temporibus laboriosam ipsa similique!
                            </p>
                            <p className="about-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ratione quo iste facilis enim laudantium inventore maxime sint, magni, sit quod corporis libero. Repudiandae sapiente voluptatibus vel. Recusandae, eum hic!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Image src={googleEvent} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }

}