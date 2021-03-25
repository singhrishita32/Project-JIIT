import './styles.css'
import React from 'react';
const Modal = ({ handleAssign,handleClose, show}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none"
    return (
        <div className={showHideClassName}>
            < section className="modal-main">
                I'm dialog
                <button type="button" onClick={handleClose}>
                    Close
            </button> <button type="button" onClick={handleAssign}>
                    Assign
            </button>
                
            </section>
        </div>
    );
}
export default Modal;

