import React, { useEffect, useState } from 'react';
import CropPlan from './CropPlan/CropPlan';
import CropTable from './CropTable/CropTable';
import axios from 'axios';

import './CropPage.scss';
import Loading from '../UI/Loading/Loading';

const CropPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [plots, setPlots] = useState([]);

    const url = 'http://kevin-hesse-server.eddi.cloud/api';

    useEffect(() => {
        setTimeout(() => {
            axios
                .get(url + '/plots/products')
                .then((response) => {
                    const newArray = response.data.filter(plot => plot.products.length > 0);
                    setPlots(newArray);
                    setIsLoading(false);
                })
                .catch((err) => console.log(err));
        }, 3000);
    }, []);

    return (
        <section>
            {isLoading && <Loading />}
            {!isLoading && 
            <>
                <CropPlan data={plots}/>
                <CropTable data={plots}/>
            </>}
        </section>
    );
};

export default CropPage;