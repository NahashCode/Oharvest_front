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

export default CropTable;