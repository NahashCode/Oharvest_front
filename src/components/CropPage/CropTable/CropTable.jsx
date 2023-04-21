import React from 'react';
import PropTypes from 'prop-types';
import ProductTag from '../ProductTag/ProductTag';

import './CropTable.scss';

const CropTable = ({data}) => {
    return (
        <div className="crop-table">
            <table>
                <caption>
                    Listes des produits disponibles par parcelle
                </caption>
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
                                <ul className="crop-table__row-products">
                                    {row.products.map(product => {
                                        return (<ProductTag key={product.id} {...product} />);
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