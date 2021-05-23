import { Card, Header, Divider, Label, List, Icon, Grid, Tab, Image } from 'semantic-ui-react'
import useWindowDimensions from './useWindowDimensions'
import { Helmet } from 'react-helmet'
import { useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'

import PASG_ScreenShot1 from '../assets/pasg.png' 
import PASG_ScreenShot2 from '../assets/pasg-1.png' 
import UP_CSI from '../assets/UP CSI_logo.png'
import UP_CURSOR from '../assets/UP CURSOR_logo.png'
import Chopsticks_ScreenShot from '../assets/chopsticks.png'

const TITLE = 'Credentials | Renzo Virtucio'

const Education = () => {
    return (
        <div>
            <Grid celled='internally' stackable>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <Header
                            as='h1'
                            style={{marginBottom:0}}
                        >
                            Bachelor of Science in Computer Science
                        </Header>
                        <Header
                            as='h3'
                            style={{marginTop:'0.20em', marginBottom:0}}
                        >
                            University of the Philippines Diliman, Quezon City
                        </Header>
                        <p style={{ fontSize: '16px', marginTop: '0.20em'}}>August 2018 – Present</p>
                        
                        <Header
                            as='h3'
                            style={{marginBottom:0}}
                        >
                            Relevant Coursework
                        </Header>
                        <p style={{ fontSize: '16px'}}>Software Engineering, Database Systems, Computer Programming, Data Structures and Algorithms, Artificial Intelligence</p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Header
                            as='h1'
                            style={{marginBottom: '0.20em'}}
                        >
                            Affiliations
                        </Header>
                        <List style={{margin:0}}>
                            <List.Item>
                                <Header as='h3'>
                                    UP Center for Student Innovations (UP CSI)
                                </Header>
                                <p style={{ fontSize: '16px', marginTop: '0.20em'}}>January 2019 – Present</p>
                            </List.Item>
                            <List.Item>
                                <Header as='h3'>
                                    UP Association of Computer Science Majors (UP CURSOR)
                                </Header>
                                <p style={{ fontSize: '16px', marginTop: '0.20em'}}>January 2019 – Present</p>
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

const Skills = () => {
    return (
        <div>
            <Grid stackable celled='internally'>
                <Grid.Row>
                    <Grid.Column width={7}>
                        <Header as='h1'>
                            Technical Skills
                        </Header>
                        <List bulleted style={{fontSize: '16px'}}>
                            <List.Item>
                                <List.Content>
                                    Proficient in <strong>Python</strong>, <strong>C</strong>, and <strong>C++</strong>.
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    Has working knowledge on Front-End Web Development using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React JS</strong>.
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    Has basic knowledge in Database Systems using <strong>MySQL</strong>.
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <Header as='h1'>
                            Soft Skills
                        </Header>
                        <Label.Group size='large' color='teal'>
                            <List style={{fontSize: '16px'}} bulleted>
                                <List.Item>
                                    <List.Content>
                                        <List.Header>Teamwork</List.Header>
                                        Has a wide range of experience in working in a team environment. Highly cooperative and always committed in reaching the team's objectives.
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <List.Header>Problem Solving</List.Header>
                                        Analytical and determined in finding solutions to problems encountered.
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <List.Header>Project Management</List.Header>
                                        Proficient in leading a project team to deliver the product that meets client expectations. Skilled in negotiating with clients.
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <List.Header>Communication</List.Header>
                                        Highly approachable and proactive in creating and maintaining good relations with others.
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <List.Header>Organization</List.Header>
                                        Systematic in approaching tasks and responsibilities by creating to-do lists and schedules.
                                    </List.Content>
                                </List.Item>
                            </List>
                        </Label.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

const Projects = () => {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Card centered fluid>
                            <Carousel transitionTime={1000} showThumbs={false} showArrows={false} >
                                <div>
                                    <img src={PASG_ScreenShot1} alt='PASG_ScreenShot1' />
                                </div>
                                <div>
                                    <img src={PASG_ScreenShot2} alt='PASG_ScreenShot2' />
                                </div>
                            </Carousel>
                            <Card.Content>
                                <Card.Header><Header>Post-Apocalyptic Survival Game <a href='https://github.com/CS-192-S3-2020-2021-Group-2/Post-Apocalyptic-Survival-Game' target='_blank' rel='noreferrer nofollow'><Icon name='github' className='icon' /></a></Header></Card.Header>
                                <Card.Meta>March 2021 – Present</Card.Meta>
                                <Card.Description>A simple text-based game which allows the player to decide their own outcome by the choices they make.</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Icon name='keyboard outline' /> Python
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Card centered fluid>
                            <Image src={Chopsticks_ScreenShot} />
                            <Card.Content>
                                <Card.Header><Header>Multiplayer Chopsticks Game <a href='https://github.com/renzovirtucio/chopsticks' target='_blank' rel='noreferrer nofollow'><Icon name='github' className='icon' /></a></Header></Card.Header>
                                <Card.Meta>May 2019 – June 2019</Card.Meta>
                                <Card.Description>An object-oriented program of the turn-based hand game which allows for multiplayer gameplay over a local area network.</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Icon name='keyboard outline' /> C++
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

const Extracurricular = () => {
    return (
        <div className='scrollable'>
            <Grid columns='equal' stackable celled='internally'>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <a href='https://www.facebook.com/upcsi/' target='_blank' rel='noreferrer nofollow'>
                            <Image src={UP_CSI} size='tiny' centered />
                            <Header as='h1' style={{marginBottom:0}}>
                                UP Center for Student Innovations 
                            </Header>
                        </a>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Header
                            as='h2'
                            style={{marginBottom:0}}
                        >
                            Vice President for Service
                        </Header>
                        <p style={{ fontSize: '16px', marginTop: '0.20em', marginBottom: 0}}>June 2020 – Present</p>
                        <List bulleted style={{fontSize: '16px'}}>
                            <List.Item>
                                <List.Content>
                                    Mentored for a project on UP Circle of Industrial Engineering Majors website update, ensuring timely completion.
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    Finalized the Developer's Memorandum of Agreement template to ensure delivery of project requirements and necessary disclosures to developers.
                                </List.Content>
                            </List.Item>
                        </List>
                        <Header
                            as='h2'
                            style={{marginBottom:0}}
                        >
                            Project Manager
                        </Header>
                        <p style={{ fontSize: '16px', marginTop: '0.20em', marginBottom: 0}}>December 2019 – March 2020</p>
                        <List bulleted style={{fontSize: '16px'}}>
                            <List.Item>
                                <List.Content>
                                    Negotiated and finalized an agreement with the Client for a 3-month-long web development project.
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    Effectively coordinated a team of 2 developers, resulting in an on-time project completion.
                                </List.Content>
                            </List.Item>
                        </List>

                        <Header
                            as='h2'
                            style={{marginBottom:0}}
                        >
                            BootUP 6.0 Overall Head
                        </Header>
                        <p style={{ fontSize: '16px', marginTop: '0.20em', marginBottom: 0}}>July 2019</p>
                        <List bulleted style={{fontSize: '16px'}}>
                            <List.Item>
                                <List.Content>
                                    Developed and finalized the plan for the yearly event that was intended to introduce the incoming freshmen to the Department of Computer Science, and UP Center for Student Innovations.
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    Effectively coordinated a team of 4 committee heads, resulting in the success of the event.
                                </List.Content>
                            </List.Item>
                        </List>

                        <Header
                            as='h2'
                            style={{marginBottom:0}}
                        >
                            DevCamp Logistics Manager
                        </Header>
                        <p style={{ fontSize: '16px', marginTop: '0.20em', marginBottom: 0}}>January 2019 – March 2019</p>
                        <List bulleted style={{fontSize: '16px'}}>
                            <List.Item>
                                <List.Content>
                                    Secured and accounted for the logistic needs of the collaborative coding Bootcamp that was intended to provide students with sufficient knowledge on web development.
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    Effectively coordinated a team of 2 members which contributed to the success of the event.
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <a href='https://www.upcursor.com/' target='_blank' rel='noreferrer nofollow'>
                            <Image src={UP_CURSOR} size='small' centered />
                            <Header as='h1' style={{marginBottom:0}}>
                                UP Association of Computer Science Majors
                            </Header>
                        </a>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Header
                            as='h2'
                            style={{marginBottom:0}}
                        >
                            CS++ Programs Head
                        </Header>
                        <p style={{ fontSize: '16px', marginTop: '0.20em', marginBottom: 0}}>September 2019 – October 2019</p>
                        <List bulleted style={{fontSize: '16px'}}>
                            <List.Item>
                                <List.Content>
                                    Contributed to the planning of the event that provided students an alternative classroom learning experience regarding Techno-Paranoia as seen in the media.
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    Helped ensure that the established schedule was being followed during the event, resulting in the smooth flow of the program.
                                </List.Content>
                            </List.Item>
                        </List>
                        <Header
                            as='h2'
                            style={{marginBottom:0}}
                        >
                            TACKLE Programs Head
                        </Header>
                        <p style={{ fontSize: '16px', marginTop: '0.20em', marginBottom: 0}}>March 2019 – April 2019</p>
                        <List bulleted style={{fontSize: '16px'}}>
                            <List.Item>
                                <List.Content>
                                    Contributed to the planning of the annual event that was intended to provide opportunities for aspiring Computer Science majors through company talks.
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    Helped ensure that the established schedule was being followed during the event, resulting in the smooth flow of the program.
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

const panes = [
  {
    menuItem: 'Education',
    render: () => <Tab.Pane attached={false}><Education /></Tab.Pane>,
  },
  {
    menuItem: 'Skills',
    render: () => <Tab.Pane attached={false}><Skills /></Tab.Pane>,
  },
  {
    menuItem: 'Projects',
    render: () => <Tab.Pane attached={false}><Projects /></Tab.Pane>,
  },
  {
    menuItem: 'Extracurricular',
    render: () => <Tab.Pane attached={false}><Extracurricular /></Tab.Pane>,
  },
]

const Content = () => {
    const { height, width } = useWindowDimensions()
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div>
            <Grid centered stackable={((width < 768) ? true : false)}>
                <Grid.Row className='credentials-header'>
                    <Grid.Column width={((width < 768) ? 14 : 10)}>
                        <Header 
                            as='h1'
                            content='Credentials.'
                            style={{
                                fontSize: (width < 768) ? '3.5em' : '4.5em',
                                fontWeight: 'normal',
                                marginBottom: 0,
                                marginTop: '1.5em',
                            }}
                        />
                        <Divider style={{ marginBottom: 0, borderTop: '2px solid' }} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>

                </Grid.Row>
            </Grid>
            <Grid centered celled='internally' style={{marginBottom:'5em'}}>
                <Grid.Row>
                    <Grid.Column width={((width < 768) ? 14 : 10)}>
                        <Tab menu={{ secondary: true, pointing: true, widths: 4, size: 'massive', color: 'blue', stackable: ((width < 768) ? true : false) }} panes={panes} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}


const Credentials = () => {
    return (
        <div className='mainComponent'>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <Content />
        </div>
    )
}

export default Credentials
