import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { 
    Container, 
    Menu, 
    MenuItem, 
    Dropdown, 
    Header, 
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    }
})

class DesktopContainer extends Component {
    render() {
        const { children } = this.props

        return (
            
            <Media greaterThan='mobile'>
                <div>
                    <Menu fixed='top' inverted secondary size='massive' borderless color='blue' >
                        <Container>
                            <MenuItem>
                                <Header as='h2' inverted={true}>Renzo Virtucio</Header>
                            </MenuItem>
                        
                            <MenuItem name='home' as={Link} to='/' style={{fontWeight: 'bold'}} />
                            <MenuItem name='about' as={Link} to='/about' style={{fontWeight: 'bold'}}/>
                            <MenuItem name='credentials' as={Link} to='/credentials' style={{fontWeight: 'bold'}}/>
                            <MenuItem name='gallery' as={Link} to='/gallery' style={{fontWeight: 'bold'}}/>
                        </Container>
                    </Menu>
                </div>
                {children}
            </Media>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

class MobileContainer extends Component {

    render() {
        const { children } = this.props

        return(
            <Media at='mobile'>
                <div>
                    <Menu inverted fixed='top' borderless size='huge' color='blue'>
                        <Container>
                            <MenuItem>
                                <Dropdown icon='bars'>
                                    <Dropdown.Menu >
                                        <Dropdown.Header content='Menu' />
                                        <Dropdown.Item as={Link} to='/'>Home</Dropdown.Item>
                                        <Dropdown.Item as={Link} to='/about'>About</Dropdown.Item>
                                        <Dropdown.Item as={Link} to='/credentials'>Credentials</Dropdown.Item>
                                        <Dropdown.Item as={Link} to='/gallery'>Gallery</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </MenuItem>
                            <MenuItem>
                                <Header as='h3' inverted>Renzo Virtucio</Header>
                            </MenuItem>
                        </Container>
                    </Menu>
                </div>
                {children}
            </Media>
        )
    }
} 

MobileContainer.propTypes = {
    children: PropTypes.node,
}

const MainMenu = ({children}) => {
    return (
        <MediaContextProvider>
            <DesktopContainer>{children}</DesktopContainer>
            <MobileContainer>{children}</MobileContainer>
        </MediaContextProvider>
    )
}

MainMenu.propTypes = {
    children: PropTypes.node,
}

export default MainMenu