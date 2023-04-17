import React from 'react';
import './CalendarHarvest.scss';

/**
 * Le calendrier des périodes de récolte du produit par mois
 */
const CalendarHarvest = ({startingDate, endingDate}) => {
    const startingMonth = new Date(startingDate).getMonth(); //0
    const endingMonth = new Date(endingDate).getMonth(); //5

    const calendar = [];

    for (let index = 0; index < 12; index++) {
        if(index >= startingMonth && index <= endingMonth){
            calendar.push({id: index, status: 'available'});
        } else {
            calendar.push({id: index, status: 'unavailable'});
        }
    }

    return (
        <div className='calendar'>
            <table className='availability-table'>
                <thead>
                    <tr>
                        <th>Jan</th>
                        <th>Fév</th>
                        <th>Mar</th>
                        <th>Avr</th>
                        <th>Mai</th>
                        <th>Juin</th>
                        <th>Juil</th>
                        <th>Août</th>
                        <th>Sep</th>
                        <th>Oct</th>
                        <th>Nov</th>
                        <th>Déc</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {calendar.map(item => (<td key={item.id} className={item.status}></td>))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CalendarHarvest;