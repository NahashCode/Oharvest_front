import React from 'react';

import Header from './Header/Header';
/* import HighlightBar from './HighlightBar/HighlightBar';
import Welcome from './Welcome/Welcome';
import ContactSection from './ContactSection/ContactSection'; */
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';

import Banner from './ProductPage/Banner/Banner';

import './App.scss';


function App() {

    return (
        <div className="app">
            <Header />
            <NavBar />
            <Banner />
{/*             <HighlightBar />
            <Welcome />
            <ContactSection /> */}
            <Footer />
        </div>
    );
}

export default App;