import { useEffect, useState } from 'react';
import CropPlan from '../CropPlan/CropPlan';
import CropTable from '../CropTable/CropTable';

import { plots } from '../plots';

import './CropBloc.scss';

const CropBloc = () => {
    const [APIData, setAPIData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
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