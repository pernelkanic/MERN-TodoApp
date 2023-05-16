import {useState} from 'react';
import {useAuthcontext} from './useAuthcontext';


const Filltodo=()=>{
    const[title , setTitle] = useState('');
    const[description , setDesc] = useState('');
    const[error , setError] = useState(null);
    const[emptyfield , setemptyfield] = useState([]);
    const{user} = useAuthcontext();
    const onSubmit=async(e)=>{
        e.preventDefault()
        if(!user){
            setError('You must be logged in');
            return;
        }
        const todo ={title,description};
        const response =await fetch('http://localhost:4000/api/workouts',{
            method:'POST',
            body:JSON.stringify(todo),
            headers:{
                'Authorization':`Bearer ${user.token} `,
                'Content-Type':'application/json'
            }
        });
        const json = await response.json();
        if(!response.ok){
            setError(json.err);
            setemptyfield(json.emptyfield)
        }
        if(response.ok){
            setTitle('')
            setDesc('')
            setError(null);
            setemptyfield([])
           

        }

    }

    
    return(
        <div>
            <form onClick={onSubmit}>
                <h3>Add a new Todo</h3>
                <label>Todo Title:</label>
                <input
                    type='text'
                    onChange={(e)=>setTitle(e.target.value)}
                    value={title}
                    

                />
                <label>Todo Description:</label>
                <input
                    type='text'
                    onChange={(e)=>setDesc(e.target.value)}
                    value={description}
                    
                    
                />
                <button >Add Todo</button>
                {error && <div className='error'>{error}</div>}
            </form>
        </div>
    )
}
export default Filltodo;
