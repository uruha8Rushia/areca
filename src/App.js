import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                {/* Navbar */}
                <Navbar />

                {/* Sections */}
                <main>
                    <section id="home" className="section">
                        <h1>Welcome to Penang</h1>
                        <p>Discover the beauty and culture of Penang!</p>
                    </section>

                    <section id="about" className="section">
                        <h2>About Penang</h2>
                        <p>
                            Penang is known for its rich history, cultural heritage, and 
                            vibrant food scene. It's a melting pot of diverse influences.
                        </p>
                    </section>

                    <section id="tourist-spot" className="section">
                        <h2>Tourist Spots</h2>
                        <p>
                            Explore Penang's iconic landmarks such as George Town, Kek Lok Si Temple, 
                            and Penang Hill.
                        </p>
                    </section>

                    <section id="food" className="section">
                        <h2>Food</h2>
                        <p>
                            Penang is a food lover's paradise! Enjoy world-famous dishes 
                            like Char Kway Teow, Laksa, and Rojak.
                        </p>
                    </section>

                    <section id="history" className="section">
                        <h2>Culture & History</h2>
                        <p>
                            Delve into the cultural and historical heritage of Penang, from 
                            colonial-era buildings to traditional festivals.
                        </p>
                    </section>
                </main>
            </div>
        </Router>
    );
}

export default App;
