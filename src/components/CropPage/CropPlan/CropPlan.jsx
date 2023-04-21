import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import Plot from './Plot';
import PropTypes from 'prop-types';

import './CropPlan.scss';

const CropPlan = ({data}) => {
    const position = [49.27005386352539, 3.9190235137939453];

    return (
        <MapContainer center={position} zoom={20} scrollWheelZoom={false} className="leaflet-map">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data.map(plot => <Plot key={plot.id} plot={plot} />)}
        </MapContainer>
    );
};

CropPlan.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.exact({
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
    ),
};

export default CropPlan;