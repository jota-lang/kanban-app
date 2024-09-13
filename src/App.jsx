import React from "react";
import { useState } from "react";
import SideMenu from "./components/sideMenu";
import Header from "./components/header";
import Cols from "./components/columns";
import ModalColumn from "./components/modalColumn";


function App() {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () =>{setIsOpen(true)};
  const closeModal = () =>{setIsOpen(false)}

  
  return (
    
    <div className="flex font-poppins overflow-hidden bg-primary-darkPurple">
        <SideMenu openModal={openModal}/>
        <ModalColumn isOpen={isOpen} onRequestClose={closeModal}/>
        <div className="flex flex-col w-screen">
          <Header /> 
          <div className="flex flex-row text-">
            < Cols />
          </div>
        </div>
    </div>
  )
}

export default App
