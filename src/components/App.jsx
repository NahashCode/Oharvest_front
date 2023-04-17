import React from 'react';

import Header from './Header/Header';
/* import HighlightBar from './HighlightBar/HighlightBar'; */
import Welcome from './Welcome/Welcome';
import ContactSection from './ContactSection/ContactSection';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';

/* ---------------------------------------------------------
Update Andréa
---------------------------------------------------------- */
import Banner from './ProductPage/Banner/Banner';
import CalendarHarvest from './ProductPage/CalendarHarvest/CalendarHarvest';
import Particularity from './ProductPage/Particularity/Particularity';
import Variety from './ProductPage/Variety/Variety';
import Tips from './ProductPage/Tips/Tips';
/* -------------------------------------------------------------
-------------------------------------------------------------- */

import './App.scss';




function App() {

    return (
        <div className="app">
            <Header />
            <NavBar />
            <Banner />
            <CalendarHarvest />
            <Particularity />
            <Variety />
            <Tips />
            {/* <HighlightBar /> */}
            <Welcome />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default App;