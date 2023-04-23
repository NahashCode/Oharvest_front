import React, { useState, useEffect} from 'react';

import './Loading.scss';

const Loading = () => {
    const [text, setText] = useState('chargement');

    useEffect(() => {
        setInterval(() => {
            setText('chargement');
        }, 4000);
        setTimeout(() => {
            setInterval(() => {
                setText('chargement.');
            }, 4000);
        }, 1000);
        setTimeout(() => {
            setInterval(() => {
                setText('chargement..');
            }, 4000);
        }, 2000);
        setTimeout(() => {
            setInterval(() => {
                setText('chargement...');
            }, 4000);
        }, 3000);
    }, []);

    return (
        <h1 className="loading">🌀{text}</h1>
    );
};

export default Loading;