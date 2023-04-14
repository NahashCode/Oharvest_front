import React from 'react';

import Header from './Header/Header';
import HighlightBar from './HighlightBar/HighlightBar';
import HighlightBarFruits from './HighlightBarFruits/HighlightBarFruits';
import HighlightBarLegumes from './HighlightBarLegumes/HighlightBarLegumes';
import HighlightBarFleurs from './HighlightBarFleurs/HighlightBarFleurs';
import Welcome from './Welcome/Welcome';
import ContactSection from './ContactSection/ContactSection';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';

import './App.scss';

function App() {

    return (
        <div className="app">
            <Header />
            <NavBar />
            <HighlightBar />
            <HighlightBarFruits />
            <HighlightBarLegumes />
            <HighlightBarFleurs />
            <Welcome />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default App;