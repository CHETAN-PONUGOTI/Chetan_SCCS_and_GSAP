import React from 'react'
import Header from './components/Header'
import AnimatedFeatures from './components/AnimatedFeatures'
import Gallery from "./components/Gallery";
import './App.css'


export default function App() {
    return (
    <div className="app-container">
        <Header />
        <AnimatedFeatures />
        <Gallery /> 
        <footer style={{height: '120vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <p style={{opacity:0.5}}>End of demo — add more content here.</p>
        </footer>
    </div>
    )
}