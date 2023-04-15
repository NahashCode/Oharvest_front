import React from 'react';
import './HighlightBar.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HighlightBar = (props) => {
    // Réglage du caroussel

    const images = props.images || [];

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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div>
            {/* <Slider {...settings}>
                {images.map((item) => (
                    <div key={ item.id } className="highlight">
                        <div >
                            <img className="highlight__card" src={item.link} />
                        </div>
                    </div>
                ))}
            </Slider> */}
            <div className='highlight'>
                <h2 className='highlight__title'>FRUITS</h2>
                <Slider {...settings}>
                    {images
                        .filter((item) => item.type === 'fruit')
                        .map((item) => (
                            <div key={item.id} className="highlight__div">
                                <div>
                                    <img className="highlight__card" src={item.link} />
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
            <div className='highlight'>
                <h2 className="highlight__title">LEGUMES</h2>
                <Slider {...settings}>
                    {images
                        .filter((item) => item.type === 'legume')
                        .map((item) => (
                            <div key={item.id} className="highlight__div">
                                <div>
                                    <img className="highlight__card" src={item.link} />
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
            <div className="highlight">
                <h2 className="highlight__title">FLEURS</h2>
                <Slider {...settings}>
                    {images
                        .filter((item) => item.type === 'fleur')
                        .map((item) => (
                            <div key={item.id} className="highlight__div">
                                <div>
                                    <img className="highlight__card" src={item.link} />
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
        </div>
    );
};

export default HighlightBar;
