/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import './Tips.scss';

const Tips = () => {
    const [showTips, setShowTips] = useState(false);

    function handleButtonClick() {
        setShowTips(!showTips);
    }

    return (
        <div className='tips' >
            <button className="tips__button" onClick={handleButtonClick}>
        Envie d'astuces...?
            </button>
            <p className={`tips__text ${showTips ? 'visible' : 'hidden'}`}>
        Voici quelques astuces pour vous aider...
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia, excepturi voluptas quis illum aspernatur perspiciatis est officiis eum dolorem qui harum eligendi ratione eius eveniet ipsum blanditiis sequi repellendus.
            </p>
        </div>
    );
};

export default Tips;