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
                    <tr key={row.plotId} className="crop-table__row">
                        <td>
                            {row.plotId}
                        </td>
                        <td>
                            <ul>
                                {row.product.map(item => {
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
    data: PropTypes.exact({
        plotId: PropTypes.number.isRequired,
        products: PropTypes.exact({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            isAvailable: PropTypes.bool.isRequired,
            image: PropTypes.string.isRequired,
            feature: PropTypes.string.isRequired,
            trick: PropTypes.string.isRequired,
            harvestBeginAt: PropTypes.oneOfType([
                PropTypes.string.isRequired,
                PropTypes.object.isRequired,
            ]),
            harvestEndAt: PropTypes.oneOfType([
                PropTypes.string.isRequired,
                PropTypes.object.isRequired,
            ]),
            category: PropTypes.exact({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired
            })
        }),
    }),
};

export default CropTable;