import React from 'react';
import { List, Grid, Image, Responsive } from 'semantic-ui-react'
import './Events.css'
import hackathonGroup from '../img/hackathon-group.jpg'

export default class Events extends React.Component {
    componentDidMount() {
        let meetings = document.getElementsByClassName("meeting");

        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;

        for (let i = 0; i < meetings.length; i++) {
            if (mm > meetings[i].getAttribute("meetingMonth")) {
                meetings[i].classList.add("done");
            } else if (
                mm == meetings[i].getAttribute("meetingMonth") &&
                dd > meetings[i].getAttribute("meetingDate")
            ) {
                meetings[i].classList.add("done");
            }
        }
    }

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
                                <List.Item className='meeting' meetingmonth="9" meetingdate="4">
                                    <i>Wednesday, September 4, 2019 from 5-6 in Doyle Hall 001</i>
                                    <br />
                                    First meeting! This meeting will consist of introductions to the board, an overview of our planned and potential events for the semester, a brief introduction to Slack, and time to mingle and get to know one another with food!
                                </List.Item>
                                <br />
                                <List.Item className='meeting' meetingmonth="9" meetingdate="18">
                                    <i>Wednesday, September 18, 2019 from 5-6 in Doyle Hall 001</i>
                                    <br />
                                    Resumes, resumes, resumes. This will be our resume meeting. There will be a presentation (mostly taken from Google, so you know it is legit!) Followed by peer discussion regarding your own resume and what could be added or taken off.
                                </List.Item>
                                <br />
                                <List.Item className='meeting' meetingmonth="10" meetingdate="3">
                                    <i>Thursday, October 3, 2019 from 12:30-2 in Merchandise Mart</i>
                                    <br />
                                    Tour of 1871! We will meet in front of the Loyola station at 11:40, take the red line together from Loyola to Fullerton, transfer to the brown line, and ride that to the Merchandise Mart. From there, we will go up to 1871 and get a full tour! Space is limited to 15, so be sure to confirm that you want to go early!
                                </List.Item>
                                <br />
                                <List.Item className='meeting' meetingmonth="10" meetingdate="16">
                                    <i>Wednesday, October 16, 2019 from 5-6 in iManage Offices</i>
                                    <br />
                                    Tour of iManage!
                                </List.Item>
                                <br />
                                <List.Item className='meeting' meetingmonth="10" meetingdate="30">
                                    <i>Wednesday, October 30, 2019 from 5-6 in Doyle Hall 001</i>
                                    <br />
                                    No meeting! Go have fun! It’s Halloween! Spoooooky szn is upon us!
                                </List.Item>
                                <br />
                                <List.Item className='meeting' meetingmonth="11" meetingdate="13">
                                    <i>Wednesday, November 13, 2019 from 6:30-8:30 in Doyle Hall 001</i>
                                    <br />
                                    Alumni Q and A! Join us in having a conversation with several DON'T PANIC! alumni about their experience in the industry, life after graduation and more!
                                </List.Item>
                                <br />
                                <List.Item className='meeting' meetingmonth="11" meetingdate="14">
                                    <i>Thursday, November 14, 2019 from 4:30-7 at slalom_build (200 East Randolph St)</i>
                                    <br />
                                    Slalom Office Tour / Meet and Greet! Thanks to one of our alumni, we have another event opportunity coming up on November 14th for any Juniors or Seniors! Slalom Build has been gracious enough to invite us to their workspace. You can ask any questions you may have about a project you're working on, things you're learning, or about them! Up to 20 people can attend, so sign up as soon as you can. Also, there will be recruiters there at the beginning so definitely try to get there on time! The Office tour and Meet and Greet begins at 4PM and from 4:30 - 7:00PM are the Open House Office Hours.
                                </List.Item>
                                <br />
                                <List.Item className='meeting' meetingmonth="11" meetingdate="27">
                                    <i>Wednesday, November 27, 2019 from 5-6 in Doyle Hall 001</i>
                                    <br />
                                    End of the year celebration, e-board elections, and free stuff day! Food, drinks, and good times to send off the end of a good year. We are also giving away merch from our company partners as well as our own merch! Thank you all for a great and successful year!
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
                        <List.Item className='meeting' meetingmonth="9" meetingdate="4">
                            <i>Wednesday, September 4, 2019 from 5-6 in Doyle Hall 001</i>
                            <br />
                            First meeting! This meeting will consist of introductions to the board, an overview of our planned and potential events for the semester, a brief introduction to Slack, and time to mingle and get to know one another with food!
                                </List.Item>
                        <br />
                        <List.Item className='meeting' meetingmonth="9" meetingdate="18">
                            <i>Wednesday, September 18, 2019 from 5-6 in Doyle Hall 001</i>
                            <br />
                            Resumes, resumes, resumes. This will be our resume meeting. There will be a presentation (mostly taken from Google, so you know it is legit!) Followed by peer discussion regarding your own resume and what could be added or taken off.
                                </List.Item>
                        <br />
                        <List.Item className='meeting' meetingmonth="10" meetingdate="3">
                            <i>Thursday, October 3, 2019 from 12:30-2 in Merchandise Mart</i>
                            <br />
                            Tour of 1871! We will meet in front of the Loyola station at 11:40, take the red line together from Loyola to Fullerton, transfer to the brown line, and ride that to the Merchandise Mart. From there, we will go up to 1871 and get a full tour! Space is limited to 15, so be sure to confirm that you want to go early!
                                </List.Item>
                        <br />
                        <List.Item className='meeting' meetingmonth="10" meetingdate="16">
                            <i>Wednesday, October 16, 2019 from 5-6 in iManage Offices</i>
                            <br />
                            Tour of iManage!
                                </List.Item>
                        <br />
                        <List.Item className='meeting' meetingmonth="10" meetingdate="30">
                            <i>Wednesday, October 30, 2019 from 5-6 in Doyle Hall 001</i>
                            <br />
                            No meeting! Go have fun! It’s Halloween! Spoooooky szn is upon us!
                                </List.Item>
                        <br />
                        <List.Item className='meeting' meetingmonth="11" meetingdate="13">
                            <i>Wednesday, November 13, 2019 from 6:30-8:30 in Doyle Hall 001</i>
                            <br />
                            Alumni Q and A! Join us in having a conversation with several DON'T PANIC! alumni about their experience in the industry, life after graduation and more!
                                </List.Item>
                        <br />
                        <List.Item className='meeting' meetingmonth="11" meetingdate="14">
                            <i>Thursday, November 14, 2019 from 4:30-7 at slalom_build (200 East Randolph St)</i>
                            <br />
                            Slalom Office Tour / Meet and Greet! Thanks to one of our alumni, we have another event opportunity coming up on November 14th for any Juniors or Seniors! Slalom Build has been gracious enough to invite us to their workspace. You can ask any questions you may have about a project you're working on, things you're learning, or about them! Up to 20 people can attend, so sign up as soon as you can. Also, there will be recruiters there at the beginning so definitely try to get there on time! The Office tour and Meet and Greet begins at 4PM and from 4:30 - 7:00PM are the Open House Office Hours.
                                </List.Item>
                        <br />
                        <List.Item className='meeting' meetingmonth="11" meetingdate="27">
                            <i>Wednesday, November 27, 2019 from 5-6 in Doyle Hall 001</i>
                            <br />
                            End of the year celebration, e-board elections, and free stuff day! Food, drinks, and good times to send off the end of a good year. We are also giving away merch from our company partners as well as our own merch! Thank you all for a great and successful year!
                                </List.Item>
                        <br />
                    </List>
                    <br />
                </Responsive>
            </div>
        )
    }

}