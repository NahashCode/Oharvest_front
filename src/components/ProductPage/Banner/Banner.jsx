/**
 * Products image, and title
 */
import React from 'react';

import './Banner.scss';

const Banner = ({image, name}) => {
    return (
        <div className="banner">
            <div className="banner__img-container">
                <img className="banner__img" src= {`http://kevin-hesse-server.eddi.cloud/images/${image}`} alt={name}></img>
                <div className="banner__title-container">
                    <h2 className="banner__title">{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;