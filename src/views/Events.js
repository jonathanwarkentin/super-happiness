import React from 'react';
import { List, Grid, Image, Responsive } from 'semantic-ui-react'
import './Events.css'
import hackathonGroup from '../img/hackathon-group.jpg'

export default class Events extends React.Component {
    render() {
        return (
            <div>
                <h1 id='events-title'>EVENTS</h1>
                <Responsive as={Grid} minWidth={Responsive.onlyTablet.minWidth} id='events-grid'>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image src={hackathonGroup} />
                        </Grid.Column>
                        <Grid.Column id='list-column' width={8}>
                            <List bulleted>
                                <List.Item className='past'>
                                    <i>Wednesday, September 4, 2019 from 5-6 in Doyle Hall 001</i>
                                    <br />
                                    First meeting! This meeting will consist of introductions to the board, an overview of our planned and potential events for the semester, a brief introduction to Slack, and time to mingle and get to know one another with food!
                                </List.Item>
                                <br />
                                <List.Item>
                                    <i>Wednesday, September 18, 2019 from 5-6 in Doyle Hall 001</i>
                                    <br />
                                    Resumes, resumes, resumes. This will be our resume meeting. There will be a presentation (mostly taken from Google, so you know it is legit!) Followed by peer discussion regarding your own resume and what could be added or taken off.
                                </List.Item>
                                <br />
                                <List.Item>
                                    <i>Thursday, October 3, 2019 from 12:30-2 in Merchandise Mart</i>
                                    <br />
                                    Tour of 1871! We will meet in front of the Loyola station at 11:40, take the red line together from Loyola to Fullerton, transfer to the brown line, and ride that to the Merchandise Mart. From there, we will go up to 1871 and get a full tour! Space is limited to 15, so be sure to confirm that you want to go early!
                                </List.Item>
                                <br />
                                <List.Item>
                                    <i>Wednesday, October 16, 2019 from 5-6 in iManage Offices</i>
                                    <br />
                                    Tour of iManage! Details still to be confirmed.
                                </List.Item>
                                <br />
                                <List.Item>
                                    <i>Wednesday, October 30, 2019 from 5-6 in Doyle Hall 001</i>
                                    <br />
                                    No meeting! Go have fun! It’s Halloween! Spoooooky szn is upon us!
                                </List.Item>
                                <br />
                                <List.Item>
                                    <i>Wednesday, November 13, 2019 from 5-6 in Doyle Hall 001</i>
                                    <br />
                                    Python 101. All the basics that you could ever want to know about Python. Bring questions! We are happy to help with them.
                                </List.Item>
                                <br />
                                <List.Item>
                                    <i>Wednesday, November 27, 2019 from 5-6 in Doyle Hall 001</i>
                                    <br />
                                    End of the year celebration & free stuff day! Food, drinks, and good times to send off the end of a good year. We are also giving away merch from our company partners as well as our own merch! Thank you all for a great and successful year!
                                </List.Item>
                                <br />
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Responsive>
                <Responsive {...Responsive.onlyMobile} as='div'>
                    <Image src={hackathonGroup} />
                    <br />
                    <List bulleted id="mobile-list">
                        <List.Item className='past'>
                            <i>Wednesday, September 4, 2019 from 5-6 in Doyle Hall 001</i>
                            <br />
                            First meeting! This meeting will consist of introductions to the board, an overview of our planned and potential events for the semester, a brief introduction to Slack, and time to mingle and get to know one another with food!
                        </List.Item>
                        <br />
                        <List.Item>
                            <i>Wednesday, September 18, 2019 from 5-6 in Doyle Hall 001</i>
                            <br />
                            Resumes, resumes, resumes. This will be our resume meeting. There will be a presentation (mostly taken from Google, so you know it is legit!) Followed by peer discussion regarding your own resume and what could be added or taken off.
                        </List.Item>
                        <br />
                        <List.Item>
                            <i>Thursday, October 3, 2019 from 12:30-2 in Merchandise Mart</i>
                            <br />
                            Tour of 1871! We will meet in front of the Loyola station at 11:40, take the red line together from Loyola to Fullerton, transfer to the brown line, and ride that to the Merchandise Mart. From there, we will go up to 1871 and get a full tour! Space is limited to 15, so be sure to confirm that you want to go early!
                        </List.Item>
                        <br />
                        <List.Item>
                            <i>Wednesday, October 16, 2019 from 5-6 in iManage Offices</i>
                            <br />
                            Tour of iManage! Details still to be confirmed.
                        </List.Item>
                        <br />
                        <List.Item>
                            <i>Wednesday, October 30, 2019 from 5-6 in Doyle Hall 001</i>
                            <br />
                            No meeting! Go have fun! It’s Halloween! Spoooooky szn is upon us!
                        </List.Item>
                        <br />
                        <List.Item>
                            <i>Wednesday, November 13, 2019 from 5-6 in Doyle Hall 001</i>
                            <br />
                            Python 101. All the basics that you could ever want to know about Python. Bring questions! We are happy to help with them.
                        </List.Item>
                        <br />
                        <List.Item>
                            <i>Wednesday, November 27, 2019 from 5-6 in Doyle Hall 001</i>
                            <br />
                            End of the year celebration & free stuff day! Food, drinks, and good times to send off the end of a good year. We are also giving away merch from our company partners as well as our own merch! Thank you all for a great and successful year!
                        </List.Item>
                    </List>
                    <br />
                </Responsive>
            </div>
        )
    }

}