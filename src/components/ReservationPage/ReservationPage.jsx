import React from 'react';

//! Import des composants
/* import ReservationHeader from './ReservationHeader/ReservationHeader';
import ReservationTheme from '.ReservationTheme/ReservationTheme';
import ReservationCalendar from '.ReservationCalendar/ReservationCalendar'; */

import ReservationHeader from './ReservationHeader/ReservationHeader';

/* 
|* Container component for the ReservationPage (Header/Theme/Calendar)
*/
const ReservationPage = () => {
    
    return (
        <>
            <ReservationHeader />
            {/*<ReservationTheme />
                <ReservationCalendar /> */}

        </>
    );
};

export default ReservationPage;