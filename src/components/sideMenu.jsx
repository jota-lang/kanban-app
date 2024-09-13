import React, { useState } from "react";
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined'; 
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const SideMenu = ({openModal}) =>{
    
    return (
        <>
            <section className="flex p-10 text-nowrap bg-primary-lightPurple  w-1/5 min-h-screen  border-r-[1px]  border-secondary-lightGray shadow-sm font-poppins">
                <div>
                    <img src="../src/assets/painel-de-controle.png" alt="logotipo" className="w-20 ml-5"></img>
                    <p  className="text-2xl ml-5 text-secondary-lightGray my-12" >ALL BOARDS ( )</p>
                    <nav className="">
                        <ul className="text-2xl text-white  hover:cursor-pointer" >
                            <li className="text-secondary-lightGray p-5 hover:bg-secondary-purple rounded-lg hover:text-white active:bg-primary-darkPurple"> <SpaceDashboardOutlinedIcon/> Plataform Launch</li>
                            <li className="text-secondary-lightGray p-5 hover:bg-secondary-purple rounded-lg  hover:text-white active:bg-primary-darkPurple"> <SpaceDashboardOutlinedIcon/> Marketing Plan</li>
                            <li className="text-secondary-lightGray p-5  hover:bg-secondary-purple rounded-lg  hover:text-white active:bg-primary-darkPurple"> <SpaceDashboardOutlinedIcon/> Roadmap</li>
                            <li className="text-secondary-purple p-5 hover:bg-secondary-purple rounded-lg  hover:text-white active:bg-primary-darkPurple" onClick={openModal}> <SpaceDashboardOutlinedIcon/> + Create a new board</li>
                        </ul>
                    </nav>
                    <div className="flex justify-center items-center gap-5 w-[250px] h-[60px] rounded-lg bg-primary-darkPurple text-secondary-lightGray mt-[400px] mb-[12px]">
                        <WbSunnyOutlinedIcon/> 
                            <label class="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer"></input>
                            <div class="relative w-11 h-6 bg-gray-200  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                            </label>
                        <DarkModeOutlinedIcon/>
                    </div>
                    <span className="text-secondary-lightGray text-2xl hover:cursor-pointer">
                        <VisibilityOffOutlinedIcon className="mr-4"/>
                        Hide Sidebar
                    </span>
                </div>
            </section>
        </>
    )
}
export default SideMenu;