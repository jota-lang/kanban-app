import React from "react";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const Header = () =>{
    return(
        <>
            <div className="flex text-nowrap p-10 items-center text-2xl text-white bg-primary-lightPurple h-[100px] font-poppins " >
               Plataform Launcher
               <button className="bg-secondary-purple pt-4 pr-5 pb-4 pl-5 rounded-full text-[16px] ml-[1200px]">+ Add New Task</button>
               <MoreVertOutlinedIcon/>
            </div>
        </>
    ) 
}
export default Header;