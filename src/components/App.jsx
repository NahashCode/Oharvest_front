import React from 'react';

import Header from './Header/Header';
/* import HighlightBar from './HighlightBar/HighlightBar';
import Welcome from './Welcome/Welcome';
import ContactSection from './ContactSection/ContactSection'; */
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';

import Banner from './ProductPage/Banner/Banner';
import CalendarHarvest from './ProductPage/CalendarHarvest/CalendarHarvest';
import Particularity from './ProductPage/Particularity/Particularity';

import './App.scss';


function App() {

    return (
        <div className="app">
            <Header />
            <NavBar />
            <Banner />
            <CalendarHarvest />
            <Particularity />
            {/*<HighlightBar />
            <Welcome />
            <ContactSection /> */}
            <Footer />
        </div>
    );
}

export default App;