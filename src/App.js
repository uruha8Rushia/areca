import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './section/Home';
import About from './section/About';
import TouristSpot from './section/TouristSpot';
import Food from './section/Food';
import History from './section/History';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                {/* Navbar */}
                <Navbar />

                {/* Sections */}
                <main>
                    <Home />
                    <About />
                    <TouristSpot />
                    <Food />
                    <History />
                </main>
            </div>
        </Router>
    );
}

export default App;
