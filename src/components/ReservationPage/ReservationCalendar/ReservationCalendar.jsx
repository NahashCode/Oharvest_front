import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import { registerLocale } from 'react-datepicker';
import fr from 'date-fns/locale/fr';
import 'react-datepicker/dist/react-datepicker.css';

import './ReservationCalendar.scss';

const ReservationCalendar = () => {
    const [selectedDate, setSelectedDate] = useState();
    const [selectedTimeSlot, setSelectedTimeSlot] = useState();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleTimeSlotChange = (event) => {
        setSelectedTimeSlot(event.target.value);
    };

    const handleReserve = () => {
        if (selectedTimeSlot) {
            console.log(
                `Date et créneau réservés: ${format(
                    selectedDate,
                    'yyyy-MM-dd'
                )} - ${selectedTimeSlot}`
            );
        } else {
            console.log('Veuillez sélectionner un créneau horaire');
        }
    };

    const isWeekday = (date) => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
    };

    registerLocale('fr', fr);

    return (
        <div className='calendar'>
            <h1 className='calendar__title'>Calendrier de réservation</h1>
            <h2 className='calendar__description' >Cliquez sur une date du calendrier, puis sélectionnez votre créneau horaire</h2>
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                inline
                locale="fr"
                filterDate={isWeekday}
                dayClassName={(date) => (isWeekday(date) ? '' : 'react-datepicker__day--weekend')}
            />
            {selectedDate && (
                <>
                    <h2 className="calendar__subtitle">Sélectionnez un créneau horaire</h2>
                    <select
                        value={selectedTimeSlot}
                        onChange={handleTimeSlotChange}
                        className="calendar__select"
                    >
                        <option value="">Choisissez un créneau horaire</option>
                        <option value="matin">Matin</option>
                        <option value="apresMidi">Après-midi</option>
                    </select>
                </>
            )}
            {selectedDate && selectedTimeSlot && (
                <button className='calendar__button' onClick={handleReserve}>Réserver la date et le créneau sélectionnés</button>
            )}
        </div>
    );
};

export default ReservationCalendar;