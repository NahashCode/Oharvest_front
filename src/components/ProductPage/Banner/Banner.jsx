/**
 * Contient l'image du produit ainsi que le titre inclus à l'intérieur
 */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Banner.scss';

const Banner = () => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://kevin-hesse-server.eddi.cloud/api/products/1', {
                    headers: {
                        'accept': 'application/json',
                    },
                });

                setProduct(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchData();
    }, []);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="banner">
            <div className="banner__img-container">
                <img className="banner__img" src= {`http://kevin-hesse-server.eddi.cloud/images/${product.image}`} alt={product.name}></img>
                <div className="banner__title-container">
                    <h2 className="banner__title">{product.name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;