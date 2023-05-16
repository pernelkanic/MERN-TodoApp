import{useState}from 'react'
import React from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from './useLogin';
const Signup =()=>{
    const[email,setEmail] = useState('');
    const[password,setpassword] = useState('');
    const {login,error,isLoading}=useLogin();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await login(email,password);
    }
    return(
        
   <div>
           
         

        <form className='login' onSubmit={handleSubmit}>
            <h3>Login</h3>
            <label>Email:</label>
            <input
                onChange={(e)=>{
                    setEmail(e.target.value);
                }}
                type='email'
                value={email}
            />
            
            <label>Password:</label>
            <input
                type='password'
                onChange={(e)=>{
                    setpassword(e.target.value);
                }}
                value={password}
            />
            <button disabled={isLoading}>Login</button>
            {error && <div className='error'>{error}</div>}
            <Link to ="/signup">Create an Account</Link>
            

        </form>
        
        </div>

    )
    
}
export default Signup