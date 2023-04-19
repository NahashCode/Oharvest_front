/* eslint-disable quotes */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import { registerLocale } from 'react-datepicker';
import fr from 'date-fns/locale/fr';
import 'react-datepicker/dist/react-datepicker.css';

import './ReservationCalendar.scss';


//Calendar for school reservation & visit
const ReservationCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleReserve = () => {
        //! ICI logique de réservation et navigation vers la nouvelle page
        console.log(`Date réservée: ${format(selectedDate, 'yyyy-MM-dd')}`);
    };
    registerLocale("fr", fr);

    return (
        <div className='calendar'>
            <h1 className='calendar__title'>Calendrier de réservation</h1>
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                inline
                locale="fr"
            />
            {selectedDate && (
                <button className='calendar__button' onClick={handleReserve}>Réserver la date sélectionnée</button>
            )}
        </div>
    );
};

export default ReservationCalendar;