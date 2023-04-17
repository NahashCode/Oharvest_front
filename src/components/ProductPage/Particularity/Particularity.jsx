/**
 * La section des particularités et description de chaque produit
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Particularity.scss';

const Particularity = () => {
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
        <div className='particularity'>
            <h2 className='particularity__title' >Particularités et description</h2>
            <p className='particularity__description' >{product.feature}</p>
        </div>
    );
};

export default Particularity;