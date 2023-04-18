import React from 'react';
import CropPage from '../../CropPage/CropPage';
import HomePage from '../../HomePage/HomePage';
import ProductPage from '../../ProductPage/ProductPage';
import { Routes, Route } from 'react-router-dom';

import './Main.scss';

const Main = () => {
    return (
        <main className="content">
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/map" element={<CropPage />}/>
                <Route path="/products/:id" element={<ProductPage />}/>
            </Routes>
        </main>
    );
};

export default Main;