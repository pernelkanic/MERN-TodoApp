import React, { useState } from "react";
import { UNSAFE_useScrollRestoration } from "react-router-dom";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthcontext } from "./useAuthcontext";
const TodoDetails =({workout})=>{
    const {user} = useAuthcontext();
    const[todo,settodo] = useState('')
    const handleClick=async()=>{
            if(!user){
                return;
            }

            const response = await fetch('http://localhost:4000/api/workouts/' + workout._id , {
                method:"DELETE",
                headers:{
                    "Authorization":`Bearer ${user.token}`,
                }

            });
            const json = await response.json();
            if(response.ok){
                settodo(json);
            }
            return workout.filter((w)=>w._id!==todo._id)
    }
return(
    <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>description:</strong> {workout.description} </p>
        <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix:true})}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
    </div>
)

}
export default TodoDetails;