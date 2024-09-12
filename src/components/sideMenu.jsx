import React from "react";
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined'; 
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const SideMenu = () =>{
    return (
        <>
            <section class="flex bg-primary-lightPurple  w-1/6 min-h-screen p-10 border-r-[1px]  border-secondary-lightGray shadow-sm">
                <div>
                    <img src="../src/assets/painel-de-controle.png" alt="logotipo" class="w-20"></img>
                    <p  class="text-2xl text-secondary-lightGray my-16" >ALL BOARDS ( )</p>
                    <nav>
                        <ul class="text-2xl text-white space-y-8 hover:cursor-pointer" >
                            <li className="text-secondary-lightGray"> <SpaceDashboardOutlinedIcon/> Plataform Launch</li>
                            <li className="text-secondary-lightGray"> <SpaceDashboardOutlinedIcon/> Marketing Plan</li>
                            <li className="text-secondary-lightGray"> <SpaceDashboardOutlinedIcon/> Roadmap</li>
                            <li className="text-secondary-purple"> <SpaceDashboardOutlinedIcon/> + Create a new board</li>
                        </ul>
                    </nav>
                    <div className="flex justify-center items-center gap-5 w-1/1 h-[50px] rounded-lg bg-primary-darkPurple text-secondary-lightGray mt-[400px] mb-[12px]">
                        <WbSunnyOutlinedIcon/> 
                            <label class="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer"></input>
                            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
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