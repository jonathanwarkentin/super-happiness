import React from 'react';
import { Grid, Image, Card, Responsive } from 'semantic-ui-react'
import './Exec.css'
import martin from '../img/MartinZ.jpg'
import jonathan from '../img/Jonathan.jpg'
import linette from '../img/Linette.jpg'
import makenna from '../img/Makenna.jpg'
import sugar from '../img/sugar.jpg'
import iqra from '../img/iqra.jpg'

export default class Exec extends React.Component {
    render() {
        return (
            <div id='exec-div'>
                <h1 id='exec-title'>EXECUTIVE BOARD</h1>
                <Responsive as={Grid} minWidth={992} id='exec-grid'>
                    <Grid.Row className='grid-row' columns={4}>
                        <Grid.Column className='board-member'>
                            <Card className='member-card'>
                                <div className="headshot" id="new-member"><a id="new-member-link" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdEV5soG_fWijQtK8RBF5-23EPHdIfYOqzjZLnDAc-PQVnkoA/viewform">Click here to apply to be our head of recruitment!</a></div>
                                <Card.Content className='member-card'>
                                    <Card.Header className='member-name'>YOU!</Card.Header>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column className='board-member'>
                            <Card className='member-card'>
                                <Image className='headshot' src={martin} />
                                <Card.Content className='member-card'>
                                    <Card.Header className='member-name'>Martin Zugschwert</Card.Header>

                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column className='board-member'>
                            <Card className='member-card'>
                                <Image className='headshot' src={linette} />
                                <Card.Content className='member-card'>
                                    <Card.Header className='member-name'>Linette Maliakal</Card.Header>

                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column className='board-member'>
                            <Card className='member-card'>
                                <Image className='headshot' src={makenna} />
                                <Card.Content className='member-card'>
                                    <Card.Header className='member-name'>Makenna Walsh</Card.Header>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className='grid-row' columns={3}>
                        <Grid.Column className='board-member'>
                            <Card className='member-card'>
                                <Image className='headshot' src={sugar} />
                                <Card.Content className='member-card'>
                                    <Card.Header className='member-name'>Sugar Dashdavaa</Card.Header>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column className='board-member'>
                            <Card className='member-card'>
                                <Image className='headshot' src={iqra} />
                                <Card.Content className='member-card'>
                                    <Card.Header className='member-name'>Iqra Rehman</Card.Header>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column className='board-member'>
                            <Card className='member-card'>
                                <Image className='headshot' src={jonathan} />
                                <Card.Content className='member-card'>
                                    <Card.Header className='member-name'>Jonathan Warkentin</Card.Header>
                                </Card.Content>
                            </Card>
                        </Grid.Column>

                    </Grid.Row>
                </Responsive>

                <Responsive maxWidth={991} as='div'>
                    <div className='grid-row'>
                        <Card className='member-card'>
                            <div className="headshot" id="new-member"><a id="new-member-link" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdEV5soG_fWijQtK8RBF5-23EPHdIfYOqzjZLnDAc-PQVnkoA/viewform">Click here to apply to be our head of recruitment!</a></div>
                            <Card.Content className='member-card'>
                                <Card.Header className='member-name'>YOU!</Card.Header>
                            </Card.Content>
                        </Card>
                    </div>
                    <br />
                    <div className='grid-row'>
                        <Card className='member-card'>
                            <Image className='headshot' src={martin} />
                            <Card.Content className='member-card'>
                                <Card.Header className='member-name'>Martin Zugschwert</Card.Header>
                            </Card.Content>
                        </Card>
                    </div>
                    <br />
                    <div className='grid-row'>
                        <Card className='member-card'>
                            <Image className='headshot' src={linette} />
                            <Card.Content className='member-card'>
                                <Card.Header className='member-name'>Linette Maliakal</Card.Header>
                            </Card.Content>
                        </Card>
                    </div>
                    <br />
                    <div className='grid-row'>
                        <Card className='member-card'>
                            <Image className='headshot' src={makenna} />
                            <Card.Content className='member-card'>
                                <Card.Header className='member-name'>Makenna Walsh</Card.Header>
                            </Card.Content>
                        </Card>
                    </div>
                    <br />
                    <div className='grid-row'>
                        <Card className='member-card'>
                            <Image className='headshot' src={sugar} />
                            <Card.Content className='member-card'>
                                <Card.Header className='member-name'>Sugar Dashdavaa</Card.Header>
                            </Card.Content>
                        </Card>
                    </div>
                    <br />
                    <div className='grid-row'>
                        <Card className='member-card'>
                            <Image className='headshot' src={iqra} />
                            <Card.Content className='member-card'>
                                <Card.Header className='member-name'>Iqra Rehman</Card.Header>
                            </Card.Content>
                        </Card>
                    </div>
                    <br />
                    <div className='grid-row'>
                        <Card className='member-card'>
                            <Image className='headshot' src={jonathan} />
                            <Card.Content className='member-card'>
                                <Card.Header className='member-name'>Jonathan Warkentin</Card.Header>
                            </Card.Content>
                        </Card>
                    </div>
                </Responsive>
                <br />
            </div>
        )
    }

}