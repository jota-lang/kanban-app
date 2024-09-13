import React, { useState } from "react";
import Modal from "react-modal"

Modal.setAppElement('#root');

const ModalColumn = ({isOpen,onRequestClose}) =>{
    
     const [inputValue, setInputValue] = useState ('')

    function valueInput (e){

        e.preventDefault();
        const value = e.target.title.value;
        setInputValue(value);
        console.log(value)
    }
    
    return(

       <Modal
       className="rounded-xl w-[400px] min-h-max p-10 font-poppins text-white bg-primary-lightPurple" 
       isOpen={isOpen}
       onRequestClose={onRequestClose}
       contentLabel="Example Modal"
       overlayClassName="flex fixed inset-0 justify-center items-center bg-gray-900 bg-opacity-55"
       >
        <h1 className="text-3xl mb-10">Add New Board</h1>
        <div className="flex flex-col ">
            <label className="text-2xl mb-2">Title</label>
            <input type="text" name="title" placeholder="escreva um titulo"className=" p-4 h-12 rounded-lg bg-transparent border-[2px] border-gray-600"></input>
            <label className="text-2xl mt-6 mb-2">Description</label>
            <input type="text" placeholder="escreva uma descrição" className="p-4 min-h-40 rounded-lg bg-transparent border-[2px] border-gray-600 -"></input>
        </div>
        <button
        className="bg-secondary-purple py-4 px-48 text-2xl rounded-full mt-10" 
        onClick={onRequestClose}>Save</button>
       </Modal>
    )
}

export default ModalColumn;