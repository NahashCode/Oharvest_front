import React from 'react';

import './ReservationTheme.scss';

//Section with de theme of the visite per month
const Theme = () => {

    return (
        <div className='theme'>
            <h2 className='theme__title' >Les thématiques par saison</h2>

            <h3 className='theme__spring'>Printemps</h3>
            <p className='theme__description'>fruits & légumes + activités spécifiques</p>
            
            <h3 className='theme__summer'>Eté</h3>
            <p className='theme__description'>fruits & légumes + activités spécifiques</p>

            <h3 className='theme__automn'>Automne</h3>
            <p className='theme__description'>fruits & légumes + activités spécifiques</p>
        </div>
    );
};

export default Theme;