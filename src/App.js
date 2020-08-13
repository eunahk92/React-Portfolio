import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home'
import About from './pages/About';
import Portfolio from './pages/Portfolio';

const App = () => {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/portfolio" component={Portfolio} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
};

export default App;
