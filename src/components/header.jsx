import React from "react";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const Header = () =>{
    return(
        <>
            <div class="flex p-10 items-center text-3xl text-white bg-primary-lightPurple w-screen h-[100px] " >
               Plataform Launcher
               <button className="bg-secondary-purple pt-4 pr-5 pb-4 pl-5 rounded-full text-[16px] ml-[1200px]">+ Add New Task</button>
               <MoreVertOutlinedIcon/>
            </div>
        </>
    ) 
}
export default Header;