import React from 'react';
import CropPage from '../../CropPage/CropPage';
import HomePage from '../../HomePage/HomePage';
import ProductPage from '../../ProductPage/ProductPage';
import ProductsListPage from '../../ProductsListPage/ProductsListPage';
import FormPage from '../../FormPage/FormPage';
import ReservationPage from '../../ReservationPage/ReservationPage';
import NotFound from '../../NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';

import './Main.scss';

const Main = () => {
    const APIurl = 'http://kevin-hesse-server.eddi.cloud/api';

    return (
        <main className="content">
            <Routes>
                <Route path="/" element={<HomePage url={APIurl} />} />
                <Route path="/map" element={<CropPage />} />
                <Route path="/products/:id" element={<ProductPage />} />
                <Route path="/products" element={<ProductsListPage />} />
                <Route path="/reservation/inscription" element={<FormPage />} />
                <Route path="/reservation" element={<ReservationPage />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </main>
    );
};

export default Main;