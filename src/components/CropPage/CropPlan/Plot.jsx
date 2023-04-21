import React from 'react';
import PropTypes from 'prop-types';
import { Rectangle, Tooltip } from 'react-leaflet';
import ProductTag from './ProductTag';

const Plot = ({plot}) => {

    const options = { color: 'hsl(208, 68%, 27%)'};

    return (
        <Rectangle key={plot.id} bounds={plot.coordinate} pathOptions={options}>
            <Tooltip direction="top" offset={[0, 20]} opacity={1} sticky>
                <ul>
                    {plot.products.map(product => (<ProductTag key={product.id} {...product} />))}
                </ul>
            </Tooltip>
        </Rectangle>
    ); 
};

Plot.propTypes = {
    plot: PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        coordinate: PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.number.isRequired,
            ).isRequired,
        ).isRequired,
        products: PropTypes.arrayOf(
            PropTypes.exact({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                isAvailable: PropTypes.bool.isRequired,
                image: PropTypes.string.isRequired,
            }).isRequired,
        ),
    }).isRequired,
};

export default Plot;