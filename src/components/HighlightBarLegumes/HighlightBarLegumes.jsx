import React from 'react';
import './HighlightBarLegumes.scss';
import { image } from './image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HighlightBarLegumes = () => {

    // Réglage du caroussel

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='highlight__div-vegetables'>
            <h2 className="highlight__title-vegetables">LEGUMES</h2>
            <Slider {...settings}>
                {image.map((item) => (
                    <div key={ image.id } className="highlight__vegetables">
                        <div >
                            <img className="highlight__card-vegetables" src={item.link} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HighlightBarLegumes;
