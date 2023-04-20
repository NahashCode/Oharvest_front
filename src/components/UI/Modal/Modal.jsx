import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import Button from '../Button/Button';

import './Modal.scss';

const Modal = ({isModalOpen, closeModal, children}) => {
    return createPortal(
        isModalOpen && <div className="overlay">
            <div className="modal">
                {children}
                <Button modifier={'close'} text={'fermer'} onClick={closeModal}/>
            </div>
        </div>,
        document.body
    );
};

Modal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;
