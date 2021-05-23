import MainMenu from './components/MainMenu'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Credentials from './components/Credentials'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const TITLE = 'Renzo Virtucio Portfolio'

const App = () => {
    return (
        <div className='page-container'>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <Router basename='/'>
                <MainMenu />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/credentials'>
                        <Credentials />
                    </Route>
                </Switch>
            </Router>
            <div style={{marginBottom: '75px'}}></div>
            <Footer />
        </div>
    )
}

export default App
