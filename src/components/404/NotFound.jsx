import React from 'react';
import img from '../../assets/carrot-in-plate.png';
import NavBar from '../NavBar/NavBar';

import './NotFound.scss';

const NotFound = () => {
    return (
        <div className='notfound'>
            <NavBar />
            <div className='notfound__div'>
                <p className="notfound__div-title">OUPSSS...</p>
            </div>
            <section className="notfound__section">
                <p className="notfound__section-p">4</p>
                <img className="notfound__section-img" src={img} alt="" />
                <p className="notfound__section-p">4</p>
            </section>
        </div>
    );
};

export default NotFound;