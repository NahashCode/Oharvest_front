import React from 'react';

import Header from './Header/Header';
/* import HighlightBar from './HighlightBar/HighlightBar'; */
import Welcome from './Welcome/Welcome';
import ContactSection from './ContactSection/ContactSection';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
/* -------------------------------------------------------
ProductPage Andréa
------------------------------------------------------- */
import ProductPage from './ProductPage/ProductPage';
//--------------------------------------------------------
import './App.scss';

function App() {

    return (
        <div className="app">
            <Header />
            <NavBar />
            <ProductPage />
            {/* <HighlightBar /> */}
            <Welcome />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default App;