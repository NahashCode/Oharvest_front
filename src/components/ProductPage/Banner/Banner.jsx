import React from 'react';
import './Banner.scss';

/**
 * Contient l'image du produit ainsi que le titre inclus à l'intérieur
 */
const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__img-container">
                <img className="banner__img" src="https://cdn.pixabay.com/photo/2013/10/04/19/23/zucchini-190775_960_720.jpg" alt="choosenProduct"></img>
                <div className="banner__title-container">
                    <h2 className="banner__title">Courgette</h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;