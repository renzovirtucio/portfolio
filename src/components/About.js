import { Grid, Header, Divider, Image, List } from 'semantic-ui-react'
import useWindowDimensions from './useWindowDimensions'
import portrait from '../assets/portrait-cn-tower.JPG'
import { Helmet } from 'react-helmet'
import { useEffect } from 'react'

const TITLE = 'About | Renzo Virtucio'

const Content = () => {
    const { height, width } = useWindowDimensions()
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return(
        <div>
            <Grid centered stackable={((width < 768) ? true : false)}>
                <Grid.Row className='about-header'>
                    <Grid.Column width={((width < 768) ? 14 : 10)}>
                        <Header 
                            as='h1'
                            content='About Me.'
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
                    <Grid.Column width={((width < 768) ? 7 : 6)} className='about-overview'>
                        <Header as='h2'>
                            Overview
                        </Header>
                        <p style={{ fontSize: (width < 768) ? '15px' : '17.5px' }}>Passionate <strong>3rd-Year Computer Science student</strong> with a wide range of leadership experience; eager to start his career in the Tech industry. In search of an internship where I can utilize and hone my skills in programming, web development, and my knowledge in the theoretical foundations of Computer Science.</p>
                    </Grid.Column>
                    <Grid.Column width={((width < 768) ? 7 : 4)}>
                        <Image src={portrait} alt='Portrait' size='medium' centered />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={((width < 768) ? 14 : 10)}>
                        <Divider/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <Grid centered celled={((width < 768) ? '' : 'internally')} style={{marginBottom:'5em', fontSize: ((width < 768) ? '1em' : '1.15em')}} stackable={((width < 768) ? true : false)}>
                <Grid.Row >
                    <Grid.Column width={((width < 768) ? 7 : 5)}>
                        <Header>
                            Personal Information
                        </Header>
                        <List>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Name</List.Header>
                                    Renzo John Virtucio
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Age</List.Header>
                                    20 years old
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Birthday</List.Header>
                                    October 13
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Interests</List.Header>
                                    Web Development, Software Engineering, Artificial Intelligence, Sports, Video Games, Foreign Languages  
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={((width < 768) ? 7 : 5)}>
                        <Header>
                            Contact Information
                        </Header>
                        <List animated>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Phone</List.Header>
                                    <a href='tel:+63927-710-3132'>(+63) 927 710 3132</a>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Email</List.Header>
                                    <a href='mailto:renzojohnvirtucio@gmail.com'>renzojohnvirtucio@gmail.com</a>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Location</List.Header>
                                    <a href='https://www.google.com/maps/place/Las+Pinas,+1747+Metro+Manila/' target='_blank' rel='noreferrer nofollow'>Las Piñas City, Metro Manila 1747</a>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header>LinkedIn</List.Header>
                                    <a href='https://www.linkedin.com/in/renzo-john-virtucio-091b87210' target='_blank' rel='noreferrer nofollow'>Renzo John Virtucio</a>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header>GitHub</List.Header>
                                    <a href='https://github.com/renzovirtucio' target='_blank' rel='noreferrer nofollow'>github.com/renzovirtucio</a>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

const About = () => {
    return (
        <div className='mainComponent'>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <Content />
        </div>
    )
}

export default About