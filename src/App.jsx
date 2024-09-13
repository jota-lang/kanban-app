import React from "react";
import SideMenu from "./components/sideMenu";
import Header from "./components/header";
import Cols from "./components/columns";


function App() {
  

  return (
    <div className="flex font-poppins overflow-hidden bg-primary-darkPurple">
        <SideMenu/>
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
