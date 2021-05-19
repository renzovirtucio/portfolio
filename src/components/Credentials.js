import { Card, Header, Divider, Label, List, Icon, Grid, Tab } from 'semantic-ui-react'
import useWindowDimensions from './useWindowDimensions'
import { Helmet } from 'react-helmet'
import { useEffect } from 'react'

const TITLE = 'Credentials | Renzo Virtucio'

const Education = () => {
    const { height, width } = useWindowDimensions()
    return (
        <div>
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
            <p style={{ fontSize: (width < 768) ? '16px' : '16px', marginTop: '0.20em'}}>August 2018 – Present</p>
            
            <Header
                as='h3'
                style={{marginBottom:0 }}
            >
                Relevant Coursework
            </Header>
            <p style={{ fontSize: (width < 768) ? '16px' : '16px'}}>Software Engineering, Artificial Intelligence, Computer Programming, Data Structures and Algorithms, Computer Organization and Architecture, Database Systems</p>
        </div>
    )
}

const Skills = () => {
    return (
        <div>
            <Grid columns='equal' stackable>
                <Grid.Row>
                    <Grid.Column>
                        <Header
                            as='h1'
                        >
                            Technical Skills
                        </Header>
                        <List bulleted>
                            <List.Item>
                                <List.Content style={{fontSize: '16px'}}>
                                    Proficient in <strong>Python</strong>, <strong>C</strong>, and <strong>C++</strong>.
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content style={{fontSize: '16px'}}>
                                    Experienced in Database Systems using <strong>MySQL</strong>.
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content style={{fontSize: '16px'}}>
                                    Has working knowledge on Front-End Web Development using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React JS</strong>.
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column>
                        <Header
                            as='h1'
                        >
                            Soft Skills
                        </Header>
                        <Label.Group size='large' color='teal'>
                            <Label>Teamwork</Label>
                            <Label>Communication</Label>
                            <Label>Organization</Label>
                            <Label>Problem Solving</Label>
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
            <Card.Group centered>
                <Card as='a' href='https://github.com/CS-192-S3-2020-2021-Group-2/Post-Apocalyptic-Survival-Game' target='_blank' rel='noreferrer nofollow'>
                    <Card.Content>
                        <Card.Header><Header>Post-Apocalyptic Survival Game</Header></Card.Header>
                        <Card.Meta>March 2021 – Present</Card.Meta>
                        <Card.Description>A simple text-based game which allows the player to decide their own outcome by the choices they make.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='keyboard outline' /> Python
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Card.Header><Header>Multiplayer Chopsticks Game</Header></Card.Header>
                        <Card.Meta>May 2019 – June 2019</Card.Meta>
                        <Card.Description>An object-oriented program of the turn-based hand game which allows for multiplayer gameplay over a local area network.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='keyboard outline' /> C++
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}

const Extracurricular = () => {
    const { height, width } = useWindowDimensions()
    return (
        <div>
            <Grid columns='equal' stackable divided={((width < 768) ? false : true)}>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <Header
                            as='h1'
                            style={{marginBottom:0}}
                        >
                            Vice President for Service
                        </Header>
                        <Header
                            as='h3'
                            style={{marginTop:'0.20em', marginBottom:0}}
                        >
                            UP Center for Student Innovations
                        </Header>
                        <p style={{ fontSize: '16px', marginTop: '0.20em'}}>June 2020 – Present</p>
                        <List bulleted>
                            <List.Item>
                                <List.Content style={{fontSize: '16px'}}>
                                    Mentored for a project on UP Circle of Industrial Engineering Majors website update, ensuring timely completion.
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content style={{fontSize: '16px'}}>
                                    Finalized the Developer's Memorandum of Agreement template to ensure delivery of project requirements and necessary disclosures to developers.
                                </List.Content>
                            </List.Item>
                        </List>
                        <Header
                            as='h1'
                            style={{marginBottom:0}}
                        >
                            Project Manager
                        </Header>
                        <Header
                            as='h3'
                            style={{marginTop:'0.20em', marginBottom:0}}
                        >
                            UP Center for Student Innovations
                        </Header>
                        <p style={{ fontSize: '16px', marginTop: '0.20em'}}>December 2019 – March 2020</p>
                        <List bulleted>
                            <List.Item>
                                <List.Content style={{fontSize: '16px'}}>
                                    Negotiated and finalized an agreement with the Client for a 3-month-long web development project.
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content style={{fontSize: '16px'}}>
                                    Effectively coordinated a team of 2 developers resulting in an on-time project completion.
                                </List.Content>
                            </List.Item>
                        </List>
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
        <div>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <Content />
        </div>
    )
}

export default Credentials
