import React from 'react';

//! Import des composants
/* import ReservationHeader from './ReservationHeader/ReservationHeader';
import ReservationTheme from '.ReservationTheme/ReservationTheme';
import ReservationCalendar from '.ReservationCalendar/ReservationCalendar'; */

import ReservationHeader from './ReservationHeader/ReservationHeader';
import ReservationModality from './ReservationModality/ReservationModality';
import ReservationTheme from './ReservationTheme/ReservationTheme';

/* 
|* Container component for the ReservationPage (Header/Theme/Calendar)
*/
const ReservationPage = () => {
    
    return (
        <>
            <ReservationHeader />
            <ReservationModality />
            <ReservationTheme />
            {/* <ReservationCalendar /> */}

        </>
    );
};

export default ReservationPage;