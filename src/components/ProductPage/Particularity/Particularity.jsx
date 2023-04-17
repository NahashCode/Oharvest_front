import React from 'react';

import './Particularity.scss';

/**
 * Particularity and description of each product
 */
const Particularity = ({feature}) => {
    return (
        <div className='particularity'>
            <h2 className='particularity__title' >Particularités et description</h2>
            <p className='particularity__description' >{feature}</p>
        </div>
    );
};

export default Particularity;