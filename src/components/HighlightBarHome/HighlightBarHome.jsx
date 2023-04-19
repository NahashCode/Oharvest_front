import React from 'react';
import PropTypes from 'prop-types';
import '../HighlightBar/HighlightBar.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'react-router-dom';

const HighlightBarHome = ({products}) => {
    // Réglage du caroussel

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
    };

    return (
        <div>
            <div className='highlight'>
                <h2 className='highlight__title'>Produits disponibles</h2>
                <Slider {...settings}>
                    {
                        products.map((product) => (
                            <div key={product.id} className="highlight__div">
                                <div>
                                    <Link to={`/products/${product.id}`}>
                                        <img className="highlight__card" src={`http://kevin-hesse-server.eddi.cloud/images/${product.image}`} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
        </div>
    );
};

HighlightBarHome.propTypes = {
    products: PropTypes.array.isRequired
};

export default HighlightBarHome;