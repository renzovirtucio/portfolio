import MainMenu from './components/MainMenu'
import Home from './components/Home'
import About from './components/About'
import Credentials from './components/Credentials'
import Gallery from './components/Gallery'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const TITLE = 'Renzo Virtucio Portfolio'

const App = () => {
    return (
        <div>
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
                    <Route path='/gallery'>
                        <Gallery />
                    </Route>
                </Switch>
            </Router>
            <div style={{marginTop: '200px'}}></div>
        </div>
    )
}

export default App
