import React from 'react';
import { image } from './image';
import HighlightBar from '../HighlightBar/HighlightBar';


const Caroussel = () => {
    
    return (
        <div>
            <HighlightBar images={image} />
        </div>
    );
};

export default Caroussel;