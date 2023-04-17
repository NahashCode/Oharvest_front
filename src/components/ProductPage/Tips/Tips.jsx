import React, { useState } from 'react';

import './Tips.scss';

/* Page des Astuces */
const Tips = ({trick}) => {
    const [showTips, setShowTips] = useState(false);

    /* Event on the button tips*/
    function handleButtonClick() {
        setShowTips(!showTips);
    }

    return (
        <div className='tips' >
            <button className="tips__button" onClick={handleButtonClick}>
                Envie d'astuces...?
            </button>
            <p className={`tips__text ${showTips ? 'visible' : 'hidden'}`}>
                Voici quelques astuces pour vous aider...{trick}
            </p>
        </div>
    );
};

export default Tips;