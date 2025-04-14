// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <h1>Welcome to My Portfolio</h1>
            <Footer />
        </div>
    );
}

export default App;