import { MapContainer, TileLayer, Rectangle, Tooltip } from 'react-leaflet';

import './CropPlan.scss';

const CropPlan = ({data}) => {
    const position = [49.27005386352539, 3.9190235137939453];

    const plots = [
        {
            id: 1,
            coordinates: [[49.270339, 3.917509], [49.270723, 3.916921]],
            products: data[0].product,
        },
        {
            id: 2,
            coordinates: [[49.270453, 3.916957], [49.270847, 3.916137]],
            products: data[1].product,
        },
        {
            id: 3,
            coordinates: [[49.270643, 3.915252], [49.270899, 3.914704]],
            products: data[2].product,
        },
    ];

    console.log(plots);

    const options = { color: 'green'};

    return (
        <MapContainer center={position} zoom={15} scrollWheelZoom={true} className="leaflet-map">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {plots.map(plot => (
                <Rectangle key={plot.id} bounds={plot.coordinates} pathOptions={options}>
                    <Tooltip direction="top" offset={[0, 20]} opacity={1} sticky>
                        <ul>
                            {plot.products.map(product => (<li key={product.id}>{product.name}</li>))}
                        </ul>
                    </Tooltip>
                </Rectangle>
            ))}
        </MapContainer>
    );
};

export default CropPlan;