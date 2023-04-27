import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './FormPage.scss';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const FormPage = () => {
    const [searchParams] = useSearchParams();
    const naviguate = useNavigate();
    const timeslot = searchParams.get('slot');
    const date = new Date(searchParams.get('date'));
    const visitAt = `${date.getFullYear()}-${date.getMonth()+1}-${date.getUTCDate()}`;
    const url = 'http://kevin-hesse-server.eddi.cloud/api';
    const [inscriptionDone, setInscriptionDone] = useState(false);

    

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data, event) => {
        event.preventDefault();
        axios.post(`${url}/bookings`, {
            ...data,
            studentNumber: Number(data.studentNumber),
            guideNumber: Number(data.guideNumber),
            groupNumber: Number(data.groupNumber),
            slot: timeslot,
            visitAt,
        })
            .then(function (response) {
                console.log(response.data);
                setInscriptionDone(true);
                setTimeout(() => {
                    naviguate('/');
                }, 5000);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div>
            <h2 className="formpage__title">
        Formulaire de réservation pour la visite
            </h2>
            <form action="" className="formpage" onSubmit={handleSubmit(onSubmit)}>
                <div className="formpage__resa-div">
                    <h3 className="formpage__resa">Heure et jour de votre reservation</h3>
                    <p>Date : {searchParams.get('date')}</p>
                    <p>Créneau : {timeslot}</p>
                </div>

                <div className="formpage__input-group">
                    <label htmlFor="name">Nom de l'Etablissement</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        {...register('name', {
                            pattern: {
                                value: /^[A-Za-z-0-9]+$/i,
                                message: 'Format non valide',
                            },
                        })}
                    />
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div className="formpage__input-group">
                    <label htmlFor="adress">Adresse postale</label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        {...register('address', {
                            pattern: {
                                value: /^[A-Za-z 0-9]+$/i,
                                message: 'Format non valide',
                            },
                        })}
                    />
                    {errors.adress && <span>{errors.adress.message}</span>}
                </div>
                <div className="formpage__input-group">
                    <label htmlFor="code">Code postal</label>
                    <input
                        type="number"
                        name="zipcode"
                        id="zipcode"
                        {...register('zipcode', {
                            pattern: {
                                value: /^[0-9]+$/,
                                message: 'Format non valide',
                            },
                            maxLength: {
                                value: 5,
                                message: 'Le code postal doit avoir 5 chiffres max',
                            },
                        })}
                    />
                    {errors.code && <span>{errors.code.message}</span>}
                </div>
                <div className="formpage__input-group">
                    <label htmlFor="city">Ville</label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        {...register('city', {
                            pattern: {
                                value: /^[A-Za-z]+$/i,
                                message: 'Format non valide',
                            },
                        })}
                    />
                    {errors.city && <span>{errors.city.message}</span>}
                </div>
                <div className="formpage__input-group">
                    <label htmlFor="phone">Téléphone du Responsable</label>
                    <input
                        type="number"
                        name="phone"
                        id="phone"
                        {...register('phone', {
                            maxLength: {
                                value: 10,
                                message: 'Format non valide',
                            },
                        })}
                    />
                    {errors.phone && <span>{errors.phone.message}</span>}
                </div>
                <div className="formpage__input-group">
                    <label htmlFor="mail">Adresse Email responsable visite</label>
                    <input
                        type="email"
                        name="mail"
                        id="mail"
                        {...register('mail', {
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Format d\'email non valide'
                            }
                        })}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div className="formpage__input-group">
                    <label htmlFor="contact">Nom de l'enseignant/e </label>
                    <input
                        type="text"
                        name="contact"
                        id="contact"
                        {...register('contact', {
                            pattern: {
                                value: /^[A-Za-z]+$/i,
                                message: 'Format non valide',
                            }
                        })}
                    />
                    {errors.teacher && <span>{errors.teacher.message}</span>}
                </div>
                <div className="formpage__input-group">
                    <label htmlFor="studentNumber">Nombre d'élèves</label>
                    <input
                        type="number"
                        name="studentNumber"
                        id="studentNumber"
                        inputMode="decimal"
                        {...register('studentNumber', {
                            pattern: {
                                value: /^([1-9]|[1-4]\d|50)$/,
                                message: 'Format non valide',
                            },
                            maxLength: {
                                value: 2,
                                message: 'Nombre d\'élèves trop important',
                            }
                        })}
                    />
                    {errors.student && <span>{errors.student.message}</span>}
                </div>
                <div className="formpage__input-group">
                    <label htmlFor="guideNumber">Nombre d'accompagnateurs</label>
                    <input
                        type="text"
                        name="guideNumber"
                        id="guideNumber"
                        inputMode="decimal"
                        {...register('guideNumber', {
                            pattern: {
                                value: /^[0-9]+$/,
                                message: 'Format non valide',
                            },
                            maxLength: {
                                value: 2,
                                message: 'Nombre d\'accompagnateurs trop important',
                            }
                        })}
                    />
                    {errors.guide && <span>{errors.guide.message}</span>}
                </div>
                <div className="formpage__input-group">
                    <label htmlFor="group">Nombre de groupes</label>
                    <input
                        type="number"
                        name="groupNumber"
                        id="groupNumber"
                        inputMode="decimal"
                        {...register('groupNumber', {
                            pattern: {
                                value: /^[0-9]+$/,
                                message: 'Format non valide',
                            },
                            maxLength: {
                                value: 2,
                                message: 'Nombre de groupe trop important',
                            }
                        })}
                    />
                    {errors.group && <span>{errors.group.message}</span>}
                </div>
                <div className="formpage__textarea">
                    <label htmlFor="transport">Transport</label>
                    <textarea
                        name="transport"
                        placeholder="Indiqué le mode de transport"
                        id="transport"
                        className="formpage__transport"
                        cols="30"
                        rows="10"
                        {...register('transport', {
                            pattern: {
                                value: /^[A-Za-z- 0-9]+$/i,
                                message: 'Erreur dans la saisie',
                            }
                        })}
                    ></textarea>
                    {errors.transport && <span>{errors.transport.message}</span>}
                </div>
                {inscriptionDone && <p style={{textAlign: 'center', border: '1px solid black', borderRadius: 10, padding: '1rem', marginTop: '1rem'}}>Votre inscription a bien été prise en compte. Vous allez être redirigé vers la page d'accueil</p>}
                <button className="formpage__btn">Réserver</button>
            </form>
        </div>
    );
};

export default FormPage;
