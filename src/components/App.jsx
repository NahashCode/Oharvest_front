import React from 'react';

import Header from './Header/Header';
import HighlightBar from './HighlightBar/HighlightBar';
import Welcome from './Welcome/Welcome';
import ContactSection from './ContactSection/ContactSection';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import CropPlan from './CropPlan/CropPlan';
import CropTable from './CropTable/CropTable';

import './App.scss';

import { plots } from './plots';

function App() {
    return (
        <div className="app">
            <Header />
            <NavBar />
            <CropPlan data={plots}/>
            <CropTable data={plots}/>
            <HighlightBar />
            <Welcome />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default App;