/**
 * Le calendrier des périodes de récolte du produit par mois
 */

import React from 'react';
import './CalendarHarvest.scss';


const CalendarHarvest = () => {
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
                        <td className='unavailable'></td>
                        <td className='unavailable'></td>
                        <td className='unavailable'></td>
                        <td className='shortly'> </td>
                        <td className='available'></td>
                        <td className='available'></td>
                        <td className='available'></td>
                        <td className='available'></td>
                        <td className='available'></td>
                        <td className='unavailable'></td>
                        <td className='unavailable'></td>
                        <td className='unavailable'></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CalendarHarvest;