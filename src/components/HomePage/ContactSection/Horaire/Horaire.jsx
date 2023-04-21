import React from 'react';

import './Horaire.scss';

const Horaire = () => {
    return (
        <div className="contact__horaire">
            <h5 className="contact__title"><i className="fa-solid fa-clock"></i>NOS HORAIRES</h5>

            <table className="contact__horaire-table">
                <tbody>
                    <tr className="contact__horaire-row">
                        <td className='contact__horaire-jour'>Lundi</td>
                        <td>| fermé</td>
                        <td>| 13h00-18h00</td>
                    </tr>
                    <tr className="contact__horaire-table-row">
                        <td className='contact__horaire-jour'>Mardi</td>
                        <td>| 9h00-12h00</td>
                        <td>| 13h00-18h00</td>
                    </tr>
                    <tr className="contact__horaire-table-row">
                        <td className='contact__horaire-jour'>Mercredi</td>
                        <td>| 9h00-12h00</td>
                        <td>| 13h00-18h00</td>
                    </tr>
                    <tr className="contact__horaire-table-row">
                        <td className='contact__horaire-jour'>Jeudi</td>
                        <td>| 9h00-12h00</td>
                        <td>| 13h00-18h00</td>
                    </tr>
                    <tr className="contact__horaire-table-row">
                        <td className='contact__horaire-jour'>Vendredi</td>
                        <td>| 9h00-12h00</td>
                        <td>| 13h00-18h00</td>
                    </tr>
                    <tr className="contact__horaire-table-row">
                        <td className='contact__horaire-jour'>Samedi</td>
                        <td>| 9h00-12h00</td>
                        <td>| 13h00-18h00</td>
                    </tr>
                    <tr className="contact__horaire-table-row">
                        <td className='contact__horaire-jour'>Dimanche</td>
                        <td>| 9h00-12h00</td>
                        <td>| 13h00-18h00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Horaire;