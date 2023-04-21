import React, { useEffect, useState } from "react";
import TodoDetails from './TodoDetails';
import Filltodo from "./Filltodo";

const Home=()=>{
    const[Workout ,setWorkout] = useState(null);
    useEffect(()=>{
        const fetchTodo = async()=>{
            const response = await fetch('/api/workouts')
            const json = await response.json()
            if(response.ok){
                 setWorkout(json);
            }
        }
        fetchTodo();
    },)


    return(
        <div className="home">
            <div className="workouts">
            {Workout && Workout.map((workout)=>(
                <TodoDetails key={workout._id} workout ={workout}/>
                ))}
                
            </div>
            <Filltodo/>
            
        </div>
    )
}
export default Home;