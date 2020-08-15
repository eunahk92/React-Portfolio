import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Wrapper>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/portfolio" component={Portfolio} />
                        <Route exact path="/aboutme" component={About} />
                    </Switch>
                </Wrapper>
                <Footer />
            </div>
        </Router>
    )
};

export default App;
