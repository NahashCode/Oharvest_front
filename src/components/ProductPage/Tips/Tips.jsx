/* eslint-disable react/no-unescaped-entities */
/* Page des Astuces */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Tips.scss';

const Tips = () => {
    const [product, setProduct] = useState(null); /* API product */
    const [showTips, setShowTips] = useState(false); /* Event tips button */

    /* API */
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

    /* Event on the button tips*/
    function handleButtonClick() {
        setShowTips(!showTips);
    }

    return (
        <div className='tips' >
            <button className="tips__button" onClick={handleButtonClick}>
        Envie d'astuces...?
            </button>
            <p className={`tips__text ${showTips ? 'visible' : 'hidden'}`}>
        Voici quelques astuces pour vous aider...{product.trick}
            </p>
        </div>
    );
};

export default Tips;