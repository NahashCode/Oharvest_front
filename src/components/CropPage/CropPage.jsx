import { useEffect, useState } from 'react';
import CropPlan from './CropPlan/CropPlan';
import CropTable from './CropTable/CropTable';
import axios from 'axios';

import { plots } from '../plots';

import './CropBloc.scss';

const CropBloc = () => {
    const [APIData, setAPIData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [foo, setFoo] = useState([]);

    const url = 'http://kevin-hesse-server.eddi.cloud/api';

    useEffect(() => {
        setTimeout(() => {

            axios
            .get(url + '/plots/products')
            .then((response) => {
                setFoo(response.data);
                console.log(response.data);
            })
            .catch((err) => console.log(err));

            setAPIData(plots);
            setIsLoading(false);
        }, 3000);
    }, [])

    return (
        <section>
            {isLoading && <p>loadding...</p>}
            {!isLoading && 
            <>
                <CropPlan data={APIData}/>
                <CropTable data={APIData}/>
            </>}
        </section>
    );
};

export default CropBloc