import React from 'react';
import PropTypes from 'prop-types';

import './CropTable.scss';

const CropTable = ({data}) => {
    return (
        <div className="crop-table --default-style">
            <table>
                <thead>
                    <tr className="crop-table__header">
                        <th>numéro parcelle</th>
                        <th>produits disponibles</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(row => (
                        <tr key={row.id} className="crop-table__row">
                            <td>
                                {row.name}
                            </td>
                            <td>
                                <ul>
                                    {row.products.map(item => {
                                        return (<li key={item.id}>{item.name}</li>);
                                    })}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

CropTable.propTypes = {
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

export default CropTable;