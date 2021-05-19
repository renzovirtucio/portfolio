import { Grid, Header, Divider, Image, Icon, Card } from 'semantic-ui-react'
import useWindowDimensions from './useWindowDimensions'
import { Carousel } from 'react-responsive-carousel'
import { Helmet } from 'react-helmet'
import { useEffect } from 'react'

// Import images
import graffitialley from '../assets/graffitialley.JPG'
import family from '../assets/family.JPG'
import blockmates from '../assets/blockmates.JPG'
import friends from '../assets/friends.JPG'
import girlfriend from '../assets/girlfriend.JPG'
import doggo from '../assets/doggo.JPG'


const TITLE = 'Gallery | Renzo Virtucio'

const Content = () => {
    const { height, width } = useWindowDimensions()
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div>
            <Grid centered stackable={((width < 768) ? true : false)}>
                <Grid.Row className='about-header'>
                    <Grid.Column width={((width < 768) ? 14 : 10)}>
                        <Header 
                            as='h1'
                            content='Gallery.'
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
            </Grid>
            <Grid centered>
                <Grid.Row>
                    <Grid.Column width={((width < 768) ? 14 : 10)} >
                        <Carousel autoPlay={true} infiniteLoop={true} stopOnHover={true} transitionTime={1000} interval={5000} >
                            <div>
                                <Grid centered verticalAlign='middle' style={{margin:'1.5em'}}>
                                    <Grid.Column>
                                        <Card centered raised>
                                            <Image src={graffitialley} fluid />
                                            <Card.Content textAlign={'left'}>
                                                <Card.Header><Icon name='map marker alternate'/>Toronto, Canada</Card.Header>
                                                <Card.Description>In front of an exhibit in the Graffiti Alley</Card.Description>
                                                <Card.Meta>2019</Card.Meta>
                                            </Card.Content>
                                        </Card>
                                    </Grid.Column>
                                </Grid>
                            </div>
                            <div>
                                <Grid centered verticalAlign='middle' style={{margin:'2em'}} >
                                    <Grid.Column>
                                        <Card centered raised style={{width: '500px'}}>
                                            <Image src={family} fluid  />
                                            <Card.Content textAlign={'left'}>
                                                <Card.Header><Icon name='map marker alternate'/>Home</Card.Header>
                                                <Card.Description>Post-holidays family picture</Card.Description>
                                                <Card.Meta>2019</Card.Meta>
                                            </Card.Content>
                                        </Card>
                                    </Grid.Column>
                                </Grid>
                            </div>
                            <div>
                                <Grid centered verticalAlign='middle' style={{margin:'1.5em'}}>
                                    <Grid.Column>
                                        <Card centered raised>
                                            <Image src={girlfriend} fluid />
                                            <Card.Content textAlign={'left'}>
                                                <Card.Header><Icon name='map marker alternate'/>Toronto, Canada</Card.Header>
                                                <Card.Description>With my girl who lives in Canada</Card.Description>
                                                <Card.Meta>2019</Card.Meta>
                                            </Card.Content>
                                        </Card>
                                    </Grid.Column>
                                </Grid>
                            </div>
                            <div>
                                <Grid centered verticalAlign='middle' style={{margin:'1.5em'}} >
                                    <Grid.Column>
                                        <Card centered raised style={{width: '450px'}}>
                                            <Image src={friends} fluid  />
                                            <Card.Content textAlign={'left'}>
                                                <Card.Header><Icon name='map marker alternate'/>Parañaque City</Card.Header>
                                                <Card.Description>Our yearly tradition (pre-covid) of spending the night in one of our houses</Card.Description>
                                                <Card.Meta>2018</Card.Meta>
                                            </Card.Content>
                                        </Card>
                                    </Grid.Column>
                                </Grid>
                            </div>
                            <div>
                                <Grid centered verticalAlign='middle' style={{margin:'1.5em'}} >
                                    <Grid.Column>
                                        <Card centered raised style={{width: '450px'}}>
                                            <Image src={blockmates} fluid  />
                                            <Card.Content textAlign={'left'}>
                                                <Card.Header><Icon name='map marker alternate'/>UP Diliman, Quezon City</Card.Header>
                                                <Card.Description>BS Computer Science Batch 2018 Block B with our Philo 1 Professor</Card.Description>
                                                <Card.Meta>2018</Card.Meta>
                                            </Card.Content>
                                        </Card>
                                    </Grid.Column>
                                </Grid>
                            </div>
                            <div>
                                <Grid centered verticalAlign='middle' style={{margin:'1.5em'}} >
                                    <Grid.Column>
                                        <Card centered raised style={{width: '450px'}}>
                                            <Image src={doggo} fluid  />
                                            <Card.Content textAlign={'left'}>
                                                <Card.Header><Icon name='map marker alternate'/>At a park</Card.Header>
                                                <Card.Description>Our doggo, Toffee</Card.Description>
                                                <Card.Meta>2020</Card.Meta>
                                            </Card.Content>
                                        </Card>
                                    </Grid.Column>
                                </Grid>
                            </div>
                        </Carousel>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export const Gallery = () => {
    return (
        <div>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <Content />
        </div>
    )
}

export default Gallery