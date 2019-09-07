import React from 'react';
import { Grid, Image, Card } from 'semantic-ui-react'
import './Exec.css'
import lucas from '../img/Lucas.jpg'

export default class Exec extends React.Component {
    render() {
        return (
            <div id='exec-div'>
                <h1 id='exec-title'>EXECUTIVE BOARD</h1>
                <Grid id='exec-grid'>
                    <Grid.Row className='grid-row' columns={4}>
                        <Grid.Column className='board-member'>
                            <Card className='member-card'>
                                <Image className='headshot' src={lucas} />
                                <Card.Content className='member-card'>
                                    <Card.Header className='member-name'>Lucas Perez</Card.Header>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column className='board-member'>
                            <Card className='member-card'>
                                <Image className='headshot' src={lucas} />
                                <Card.Content className='member-card'>
                                    <Card.Header className='member-name'>Lucas Perez</Card.Header>

                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column className='board-member'>
                            <Card className='member-card'>
                                <Image className='headshot' src={lucas} />
                                <Card.Content className='member-card'>
                                    <Card.Header className='member-name'>Lucas Perez</Card.Header>

                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column className='board-member'>
                            <Card className='member-card'>
                                <Image className='headshot' src={lucas} />
                                <Card.Content className='member-card'>
                                    <Card.Header className='member-name'>Lucas Perez</Card.Header>

                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className='grid-row' columns={3}>
                        <Grid.Column className='board-member'>
                            <Card className='member-card'>
                                <Image className='headshot' src={lucas} />
                                <Card.Content className='member-card'>
                                    <Card.Header className='member-name'>Lucas Perez</Card.Header>

                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column className='board-member'>
                            <Card className='member-card'>
                                <Image className='headshot' src={lucas} />
                                <Card.Content className='member-card'>
                                    <Card.Header className='member-name'>Lucas Perez</Card.Header>

                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column className='board-member'>
                            <Card className='member-card'>
                                <Image className='headshot' src={lucas} />
                                <Card.Content className='member-card'>
                                    <Card.Header className='member-name'>Lucas Perez</Card.Header>

                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }

}