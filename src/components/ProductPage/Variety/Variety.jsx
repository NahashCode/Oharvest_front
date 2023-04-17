import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Variety.scss';

/**
 * Variety for each product
 */
const Variety = () => {
    const [variety, setVariety] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://kevin-hesse-server.eddi.cloud/api/varieties/1', {
                    headers: {
                        'accept': 'application/json',
                    },
                });
                setVariety(response.data);

            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchData();
    }, []);

    if (!variety) {
        return <div>Loading...</div>;
    }

    return (
        <div className='variety'>
            <h2 className='variety__title' >Nos variétés</h2>
            <h3 className='variety__name'>{variety.name}</h3>
            <p className='variety__description'>{variety.product.feature}</p>
        </div>
    );
};

export default Variety;