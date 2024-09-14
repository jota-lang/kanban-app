import React from "react";
import { useState } from "react";
import SideMenu from "./components/sideMenu";
import Header from "./components/header";
import Cols from "./components/columns";
import ModalColumn from "./components/modalColumn";


function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const openModal = () =>{setIsOpen(true)};
  const closeModal = () =>{setIsOpen(false)}

  const handleInputChange = (value) => {
    setInputValue(value);
    closeModal(); // Fecha o modal após a captura do valor
  };

  return (

    <div className="flex font-poppins overflow-hidden bg-primary-darkPurple">
        <SideMenu openModal={openModal}/>
        <ModalColumn isOpen={isOpen} onRequestClose={closeModal} isOnchange={handleInputChange}/>
        <div className="flex flex-col w-screen">
          <Header /> 
          <div className="flex flex-row text-">
          
          </div>
        </div>
    </div>
  )
}

export default App
