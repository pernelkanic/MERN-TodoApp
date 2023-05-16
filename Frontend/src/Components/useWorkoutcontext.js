import { WorkoutsContext } from "../context/Workoutcontext";
import { useContext } from "react";
export const useWorkoutcontext=()=>{
    const context = useContext(WorkoutsContext);
    if(!context){
        throw Error("useWorkoutcontext must be used inside an workoutcontextprovider");
    }
    return context;
}