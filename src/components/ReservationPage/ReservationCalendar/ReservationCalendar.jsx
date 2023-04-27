import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import { registerLocale } from 'react-datepicker';
import fr from 'date-fns/locale/fr';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

import './ReservationCalendar.scss';

/* ---------------------------------------
Hook
--------------------------------------- */
const ReservationCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(); //stock the date choosen by user
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(); //stock the time slot choosen by user
    const [reservedSlots, setReservedSlots] = useState([]); //stock time slot already booked
    const [excludeDays, setExcludeDays] = useState([]);

    useEffect(() => {
        const url = 'http://kevin-hesse-server.eddi.cloud/api';
        axios.get(url + '/bookings')
            .then((response) => {
                // const bookingDates = response.data.map((item) => ({ date: new Date(item.visitAt), timeSlot: item.slot }));
                const bookingDates = response.data.map((item) => ({ dateString: item.visitAt, timeSlot: item.slot }));
                const lists = reservedSlots.map(item => item.date);
                setReservedSlots(bookingDates);
                setExcludeDays(lists);
            })
            .catch((error) => console.log(error));
    }, []);


    /* ----------------------------------
Event function
--------------------------------------- */
    /**
     * on click on the day date, update the date choosen by the user
     */
    const handleDateChange = (date) => { // -> Event: click on a day date 
        console.log('date selectionné', date);
        setSelectedDate(date); //-> Update state: date choosen by user
    };

    /**
     * on click event on the select timeslot, update the timeslot selected by user
     */
    const handleTimeSlotChange = (event) => { // -> Event: click on time slot 
        console.log(event.target.value);
        setSelectedTimeSlot(event.target.value); //-> Update state: time slot choosen by user
    };

    /**
     * on click event on the button reservation, 
     */
    const handleReserve = () => { // -> Event: click on button "reservation" 
        if (selectedTimeSlot) { //-> Check if slot already booked & Update state: time slot already booked
            // console.log(
            //   `Date et créneau réservés: ${format(
            //        selectedDate,
            //        'yyyy-MM-dd'
            //    )} - ${selectedTimeSlot}`
            //);

            console.log('selectedDate', selectedDate);
            const dateString = format(selectedDate, 'yyyy-MM-dd');
            const updatedReservedSlots = {
                ...reservedSlots,
                [dateString]: reservedSlots[dateString]
                    ? [...reservedSlots[dateString], selectedTimeSlot]
                    : [selectedTimeSlot],
            };

            console.log('datestring: ', dateString);
            console.log('reservedSlots', reservedSlots);           
            setReservedSlots(updatedReservedSlots);
            setSelectedDate();
            setSelectedTimeSlot();
        } else {
            console.log('Veuillez sélectionner un créneau horaire');
        }
    };

    /* ---------------------------------
Utility function
--------------------------------------- */

    /**
     * check if a day is totally booked (morning and afternoon slots)
     */
    const isDateReserved = (date) => {
        const dateString = format(date, 'yyyy-MM-dd');
        return (
            reservedSlots[dateString] &&
            reservedSlots[dateString].includes('morning') &&
            reservedSlots[dateString].includes('afternoon')
        );
    };

    const isWeekday = (date) => { // Check if a day is out of week-end & not totally booked (morning & afternoon)
        const day = date.getDay();
        return day !== 0 && day !== 6 && !isDateReserved(date);
    };

    const isTimeSlotReserved = (date, timeSlot) => { // Check if a time slot is booked
        const dateString = format(date, 'yyyy-MM-dd');
        return (
            reservedSlots[dateString] && reservedSlots[dateString].includes(timeSlot)
        );
    };

    registerLocale('fr', fr);

    return (
        <div className="calendar">
            <h1 className="calendar__title">Calendrier de réservations</h1>
            <div className='container__desktop'>
                <div className='calendar__container'>
                    <h2 className='calendar__description'>Choisissez la date de votre visite</h2>
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        inline
                        locale="fr"
                        excludeDateIntervals={[{start: new Date(Date.now().getFullYear(), 0), end: Date.now()}]}
                        filterDate={isWeekday}
                    />
                </div>
                {selectedDate && (
                    <div className='container_reservation'>
                        <h2 className="calendar__description">Sélectionnez un créneau horaire</h2>
                        <select
                            value={selectedTimeSlot}
                            onChange={handleTimeSlotChange}
                            className="calendar__select"
                        >
                            <option value="">Choisissez un créneau horaire</option>
                            <option
                                value="morning"
                                disabled={isTimeSlotReserved(selectedDate, 'morning')}
                            >
                                Matin
                            </option>
                            <option
                                value="afternoon"
                                disabled={isTimeSlotReserved(selectedDate, 'afternoon')}
                            >
                                Après-midi
                            </option>
                        </select>
                        {selectedTimeSlot && (
                            //<Link to={`/reservation/inscription?date=${selectedDate}&&slot=${selectedTimeSlot}`}>
                                <button className="calendar__button" onClick={handleReserve}>
                                    Réserver la date et le créneau sélectionnés
                                </button>
                            //</Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReservationCalendar;