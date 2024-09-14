import { Description } from "@mui/icons-material";
import React, { useState } from "react";
import Modal from "react-modal"

Modal.setAppElement('#root');

const ModalColumn = ({isOpen,onRequestClose,isOnchange}) =>{

     const [inputValue, setInputValue] = useState ('')
     const [columns, setColumns] = useState([]);
   
    function valueInput (e){

        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        setInputValue(title);
        isOnchange(title)
    }
    
    return(

       <Modal
       className="rounded-xl w-[400px] min-h-max p-10 font-poppins text-white bg-primary-lightPurple" 
       isOpen={isOpen}
       onRequestClose={onRequestClose}
       contentLabel="Example Modal"
       overlayClassName="flex fixed inset-0 justify-center items-center bg-gray-900 bg-opacity-55"
       >
        <form onSubmit={valueInput}>
            <h1 className="text-3xl mb-10">Add New Board</h1>
            <div className="flex flex-col text-2xl ">
                <label className=" mb-2">Title</label>
                <input type="text" name="title" placeholder="escreva um titulo"className=" p-4 h-12 rounded-lg bg-transparent border-[2px] border-gray-600"></input>
                <label className=" mt-6 mb-2">Description</label>
                <input type="text" name="description" placeholder="escreva uma descrição" className="flex p-4  min-h-40 rounded-lg bg-transparent border-[2px] border-gray-600 -"></input>
            </div>
            <button
            className="bg-secondary-purple py-4 px-48 text-2xl rounded-full mt-10" 
            type="submit">Save</button>
        </form>
        
       </Modal>
    )
}

export default ModalColumn;