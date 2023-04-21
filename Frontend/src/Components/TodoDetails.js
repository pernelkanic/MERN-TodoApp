import React, { useState } from "react";
import { UNSAFE_useScrollRestoration } from "react-router-dom";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const TodoDetails =({workout})=>{
    const[todo,settodo] = useState('')
    const handleClick=async()=>{
            
            const response = await fetch('/api/workouts/' + workout._id , {
                method:"DELETE",

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