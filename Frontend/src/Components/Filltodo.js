import {useState} from 'react';

const Filltodo=()=>{
    const[title , setTitle] = useState('');
    const[description , setDesc] = useState('');
    const[error , setError] = useState(null);
    const[emptyfield , setemptyfield] = useState([]);
    const onSubmit=async(e)=>{
        e.preventDefault()
        const todo ={title,description};
        const response =await fetch('/api/workouts',{
            method:'POST',
            body:JSON.stringify(todo),
            headers:{
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
            <form>
                <h3>Add a new Todo</h3>
                <label>Todo Title:</label>
                <input
                    type='text'
                    onChange={(e)=>setTitle(e.target.value)}
                    value={title}
                    className={emptyfield.includes('title')?'error':''}

                />
                <label>Todo Description:</label>
                <input
                    type='text'
                    onChange={(e)=>setDesc(e.target.value)}
                    value={description}
                    className={emptyfield.includes('description')?'error':''}
                    
                />
                <button onClick={onSubmit}>Add Todo</button>
                {error && <div className='error'>{error}</div>}
            </form>
        </div>
    )
}
export default Filltodo;

