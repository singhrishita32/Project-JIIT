import './styles.css'
import React from 'react';
const Modal = ({ handleClose, show}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none"
    return (
        <div className={showHideClassName}>
            < section className="modal-main">
                I'm dialog
                <button type="button" onClick={handleClose}>
                    Close
            </button>
            </section>
        </div>
    );
}
export default Modal;

