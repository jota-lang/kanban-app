import React from "react";

const Cols= ({ inputValue })=>{
    return(
        <>
        <div className=" m-10 w-1/6">
        <span className=" flex items-center gap-2 text-white text-2xl">
            <div className="w-5 h-5 bg-amber-600 rounded-full"></div>
            <p>{ inputValue }</p>
            </span>
            <div className="mt-5 min-h-[700px] text-4xl text-secondary-lightGray rounded-xl bg-gradient-to-t from-primary-darkPurple via-secondary-columnBg to-secondary-columnBg flex items-center justify-center">
                +New Column
            </div>
        </div>
            
        </>
    )
}
export default Cols;