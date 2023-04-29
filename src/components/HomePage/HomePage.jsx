import React from 'react';
import PropTypes from 'prop-types';
import {useFetch} from '../../custom-hooks/useFetch.js';
import Carousel from '../UI/Carousel/Carousel.jsx';
import Welcome from './Welcome/Welcome';
import ContactSection from './ContactSection/ContactSection';
import Loading from '../UI/Loading/Loading';
import Notification from '../Notification/Notification.jsx';
import Error from '../UI/Error/Error';


/**
 * Landing page
 * @returns {JSX.Element}
 */
const Home = ({url}) => {
    const {data, isLoading, hasError} = useFetch(url + '/products/available');

    return (
        <>
            <Notification />
            {isLoading && <Loading />}
            {hasError && <Error />}
            {data && <Carousel products={data} title="Produits disponibles" />}
            <Welcome />
            <ContactSection />
        </>
    );
};

Home.propTypes = {
    url: PropTypes.string.isRequired,
};

export default Home;