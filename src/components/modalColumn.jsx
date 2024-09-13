import React from "react";
import Modal from "react-modal"

Modal.setAppElement("root");

const ModalColumn = ({isOpen,onRequestClose}) =>{
    
    return(
       <Modal
       isOpen={isOpen}
       onRequestClose={onRequestClose}
       contentLabel="Example Modal"
       overlayClassName="Overlay"
       >
        <h2>Hello World</h2>
        <button onClick={onRequestClose}>Close Modal</button>
       </Modal>
    )
}

export default ModalColumn;