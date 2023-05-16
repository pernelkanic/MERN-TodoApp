import React, { useEffect, useState } from "react";
import TodoDetails from './TodoDetails';
import Filltodo from "./Filltodo";
import { useAuthcontext } from "./useAuthcontext";

const Home=()=>{
    
    const[Workout ,setWorkout] = useState(null);
    const {user} = useAuthcontext();
    useEffect(()=>{

        const fetchTodo = async()=>{
            const response = await fetch('http://localhost:4000/api/workouts',{
                headers:{
                    "Authorization":`Bearer ${user.token}`,
                }
            })
            const json = await response.json()
            if(response.ok){
                 setWorkout(json);
            }
        }
        if(user){
            fetchTodo();
        }
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