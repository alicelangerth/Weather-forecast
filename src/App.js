import React, { Component } from 'react';
import Content from './components/Content/Content'
import Navigation from './components/Navigation/Navigation';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import {
    BrowserRouter,
    Route,
} from 'react-router-dom';


class App extends Component {
    render() {
        return (
        <BrowserRouter>
            <div className="App">
                <Navigation />
                <Route exact path="/" component={ Content } />
                <Route path="/About" component={ About } />
                <Route path="/Contact" component={ Contact } />
            </div>
        </BrowserRouter>
    );
    }
}

export default App;
