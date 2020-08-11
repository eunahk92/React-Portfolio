import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';

const App = () => {
    return (
    <Router>
        <div>
            <Navbar />
            <Wrapper>
                <Route exact path="/" />
                <Route exact path="/about" />
                <Route exact path="/portfolio" />
                <Route exact path="/contactMe" />
            </Wrapper>
        </div>
    </Router>
    )
};

export default App;
