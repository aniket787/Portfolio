import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css';

const Modal = ({ closeModal }) => {

    return ReactDOM.createPortal(
        <div onClick={closeModal} className="modal-overlay">
            <div onClick={(e) => e.stopPropagation()} className="modal-container">
                <div className="upper-section">
                    <h1>Connect Me On Linkedin</h1>
                    <p onClick={closeModal} className='close' >&times;</p>

                </div>
                <div className="middle-section">
                    <h3>Visit my linkedin profile and feel free to connect with me.</h3>
                    {/* <p>Do u wish to learn react</p>  */}


                </div>
                <div className="lower-section">
                    <a onClick={closeModal} className='modal-btn btn-red'>Close</a>
                    <a href='https://www.linkedin.com/in/aniket-gaikwad-7379111a9/' traget='_blank' rel='noreferrer' className='modal-btn btn-green'>Open Linkedin</a>

                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}
export default Modal;