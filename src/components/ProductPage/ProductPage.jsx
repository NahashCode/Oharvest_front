import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from './Banner/Banner';
import CalendarHarvest from './CalendarHarvest/CalendarHarvest';
import Particularity from './Particularity/Particularity';
import Variety from './Variety/Variety';
import Tips from './Tips/Tips';

import './ProductPage.scss';

/* Container component for the Product page 
(Banner/CalendarHArvest/Particularity/Variety/Tips) */
const ProductPage = () => {
    const [product, setProduct] = useState({});
    const [varieties, setVarieties] = useState({});
    const [isLoading, setisLoading] = useState(true);
    const url = 'http://kevin-hesse-server.eddi.cloud/api';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url + '/products/1', {
                    headers: {
                        'accept': 'application/json',
                    },
                });
                setProduct(response.data);
                setisLoading(false);
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url + '/varieties/1', {
                    headers: {
                        'accept': 'application/json',
                    },
                });
                setVarieties(response.data);
                setisLoading(false);
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };
        fetchData();
    }, []);
    
    return (
        <>
            {isLoading && (<p>Chargement...</p>) }
            {!isLoading && (<>
                <Banner name={product.name} image={product.image} />
                <CalendarHarvest startingDate={product.harvestBeginAt} endingDate={product.harvestEndAt} />
                <Particularity feature={product.feature} />
                <Variety name={varieties.name} feature={varieties.product.feature}/>
                <Tips trick={product.trick}/>
            </>)}
        </>
    );
};

export default ProductPage;