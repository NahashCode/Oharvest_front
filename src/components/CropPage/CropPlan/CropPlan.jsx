import React, { useEffect } from 'react';
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';
import Plot from './Plot';
import PropTypes from 'prop-types';

import './CropPlan.scss';
import UserMarker from './UserMarker';

const CropPlan = ({data}) => {
    const position = [48.5771821, 7.7488522];

    useEffect(() => {
        getUserLocation();
    }, []);

    function getUserLocation(){
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords.latitude, position.coords.longitude);
        });
    }

    return (
        <MapContainer center={position} zoom={20} scrollWheelZoom={false} className="leaflet-map">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LayersControl position="topright">
                {data.map(plot => <Plot key={plot.id} plot={plot} />)}
                <UserMarker />
            </LayersControl>
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