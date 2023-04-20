import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HighlightBarHome from '../HighlightBarHome/HighlightBarHome';
import Welcome from './Welcome/Welcome';
import ContactSection from './ContactSection/ContactSection';

const Home = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let url = 'http://kevin-hesse-server.eddi.cloud/api';

    useEffect(() => {
        setTimeout(() => {
            axios
                .get(url + '/products/available')
                .then((response) => {
                    setProducts(response.data);
                    setIsLoading(false);
                })
                .catch((err) => console.log(err));
        }, 3000);
    }, []);

    return (
        <>
            {isLoading && (<p>Chargement...</p>)}
            {!isLoading && <HighlightBarHome products={products} />}
            <Welcome />
            <ContactSection />
        </>
    );
};

export default Home;