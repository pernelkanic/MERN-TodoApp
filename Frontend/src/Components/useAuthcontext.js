import { useState,useContext } from "react";
import { AuthContext } from "../context/Authcontext";

export const useAuthcontext =()=>{
    const context = useContext(AuthContext);
    if(!context){
        
        throw Error('useAuthcontext should be used inside AuthContextProvider');

    }
    return context;
}