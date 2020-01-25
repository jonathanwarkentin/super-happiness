import React from 'react';
import { List, Grid, Image, Responsive } from 'semantic-ui-react'
import './Events.css'
import hackathonGroup from '../img/hackathon-group.jpg'

export default class Events extends React.Component {
    componentDidMount() {
        const allEvents = [
            {
                loc: "Wednesday, January 22 from 7-8pm in Doyle Hall 001",
                description: "Intro meeting. Say hello, get to know people. If you have no idea what is going on come to this and learn a bit about us!",
                day: 22,
                month: 1,
                year: 2020,
            },
            {
                loc: "Wednesday, January 29 from 7-8pm in Doyle Hall 001",
                description: "Chill. A relaxed meeting where you can come and work on any computer science projects that you might want to, try your hand at a coding challenge or two, and most importantly spend some time with your peers!",
                day: 29,
                month: 1,
                year: 2020,
            },
            {
                loc: "Wednesday, February 5 from 7-8pm in Doyle Hall 001",
                description: "What is Computer Science? At this event we will look at what careers lie under the broad term "Computer Science". From Cybersecurity to Data Science to Full Stack development, all of these fields are possible applications of a Computer Science degree. We will give an overview of what each field entails and a bit about how the roles generally work together in a company.",
                day: 5,
                month: 2,
                year: 2020,
            },
            {
                loc: "Wednesday, February 12 from 7-8pm in Doyle Hall 001",
                description: "Chill. A relaxed meeting where you can come and work on any computer science projects that you might want to, try your hand at a coding challenge or two, and most importantly spend some time with your peers!",
                day: 12,
                month: 2,
                year: 2020,
            },
            {
                loc: "Wednesday, February 19 from 7-8pm in Doyle Hall 001",
                description: "Resume Workshop. There will be a presentation (mostly taken from Google, so you know it is legit!) Followed by peer discussion regarding your own resume and what could be added or taken off.",
                day: 19,
                month: 2,
                year: 2020,
            },
            {
                loc: "Wednesday, February 26 from 7-8pm in Doyle Hall 001",
                description: "Chill. A relaxed meeting where you can come and work on any computer science projects that you might want to, try your hand at a coding challenge or two, and most importantly spend some time with your peers!",
                day: 26,
                month: 2,
                year: 2020,
            },
            {
                loc: "Wednesday, March 4",
                description: "SPRING BREAK! Go have fun!",
                day: 4,
                month: 3,
                year: 2020,
            },
            {
                loc: "Wednesday, March 11 from 7-8pm in Doyle Hall 001",
                description: "Interview Workshop. Come try your hand at some technical interview questions to practice for your own future interviews! Open to all skill levels.",
                day: 11,
                month: 3,
                year: 2020,
            },
            {
                loc: "Wednesday, March 18 from 7-8pm in Doyle Hall 001",
                description: "Chill. A relaxed meeting where you can come and work on any computer science projects that you might want to, try your hand at a coding challenge or two, and most importantly spend some time with your peers!",
                day: 18,
                month: 3,
                year: 2020,
            },
            {
                loc: "Wednesday, March 25",
                description: "TBA",
                day: 25,
                month: 3,
                year: 2020,
            },
            {
                loc: "Wednesday, April 1",
                description: "TBA",
                day: 1,
                month: 4,
                year: 2020,
            },
            {
                loc: "Wednesday, April 8",
                description: "TBA",
                day: 8,
                month: 4,
                year: 2020,
            },
            {
                loc: "Wednesday, April 15",
                description: "TBA",
                day: 15,
                month: 4,
                year: 2020,
            },
            {
                loc: "Wednesday, April 22",
                description: "TBA",
                day: 22,
                month: 4,
                year: 2020,
            },
            {
                loc: "Wednesday, April 29",
                description: "TBA",
                day: 29,
                month: 4,
                year: 2020,
            }
        ]

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
                <Responsive as={Grid} minWidth={992} id='events-grid'>
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
                                <List.Item className='meeting' meetingmonth="12" meetingdate="4">
                                    <i>Wednesday, December 4, 2019 from 5-6 in Doyle Hall 001</i>
                                    <br />
                                    End of the year celebration, e-board elections, and free stuff day! Food, drinks, and good times to send off the end of a good year. We are also giving away merch from our company partners as well as our own merch! Thank you all for a great and successful year!
                                </List.Item>
                                <br />
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Responsive>
                <Responsive maxWidth={991} as='div'>
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
                            <i>Thursday, November 14, 2019 from 4-7 at slalom_build (200 East Randolph St)</i>
                            <br />
                            Slalom Office Tour / Meet and Greet! Thanks to one of our alumni, we have another event opportunity coming up on November 14th for any Juniors or Seniors! Slalom Build has been gracious enough to invite us to their workspace. You can ask any questions you may have about a project you're working on, things you're learning, or about them! Up to 20 people can attend, so sign up as soon as you can. Also, there will be recruiters there at the beginning so definitely try to get there on time! The Office tour and Meet and Greet begins at 4PM and from 4:30 - 7:00PM are the Open House Office Hours.
                                </List.Item>
                        <br />
                        <List.Item className='meeting' meetingmonth="12" meetingdate="4">
                            <i>Wednesday, December 4, 2019 from 5-6 in Doyle Hall 001</i>
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