import React from 'react';

import Header from './Header/Header';
import Welcome from './Welcome/Welcome';
import ContactSection from './ContactSection/ContactSection';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import ProductsListPage from './ProductsListPage/ProductsListPage';

import './App.scss';

function App() {

    return (
        <div className="app">
            <Header />
            <NavBar />
            <ProductsListPage />
            <Welcome />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default App;