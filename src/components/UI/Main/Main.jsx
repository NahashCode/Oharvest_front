import CropBloc from '../../CropBloc/CropBloc';
import Home from '../../Home/Home';
import { Routes, Route } from 'react-router-dom';

import './Main.scss';

const Main = () => {
    return (
        <main className="content">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/map" element={<CropBloc />}/>
                <Route path="/products" element={<ProductPage />}/>
                <Route path="/map" element={<Caroussel />}/>
            </Routes>
        </main>
    );
};

export default Main;