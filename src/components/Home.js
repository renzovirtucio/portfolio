import React, { Component } from 'react'
import {
    Button,
    Container, 
    Grid,
    Header,
    Transition,
} from 'semantic-ui-react'
import useWindowDimensions from './useWindowDimensions'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

class HiThere extends Component {
    state = { animation: 'tada', duration: 700, visible: true }
    toggleVisibility = () => this.setState(prevState => ({ visible: !prevState.visible}))
    
    render() {
        const { animation, duration, visible } = this.state
        return (
            <div>
                <Transition
                    animation={animation}
                    duration={duration}
                    visible={visible}
                    transitionOnMount
                >
                    <Header 
                        as='h1'
                        content='Hi there :)'
                        style={{
                            fontSize: '4em',
                            fontWeight: 'normal',
                            marginBottom: 0,
                        }}
                    />
                </Transition>
            </div>
        )
    }
}

const HomeHeader = () => {
    const { height, width } = useWindowDimensions()
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return(
        <Grid className='main-header'>
            <Grid.Row>
                <Grid.Column>
                    <Container text textAlign='center'>
                        <HiThere />
                        <Header
                            as='h3'
                            content='Welcome to my portfolio website!'
                            style={{
                                fontSize: (width < 768) ? '1.5em' : '2.2em',
                                fontWeight: 'normal',
                                marginTop: (width < 768) ? '0.5em': '1em',
                            }}
                        />
                        <Button primary size= {(width < 768)? 'big' : 'huge'} as={Link} to='/about'>
                            About Me 
                        </Button>
                    </Container>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

const Home = () => {
    const { height, width } = useWindowDimensions()
    return(
        <div style={{ marginTop: (width < 768) ? '12em' : '19em'}}>
            <HomeHeader />
        </div>
    )
}

export default Home
