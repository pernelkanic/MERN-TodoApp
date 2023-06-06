import { Link } from "react-router-dom";
import React from "react";
import { useLogout } from "./useLogout";
import { useAuthcontext } from "./useAuthcontext";
const Navbar=()=>{
    const {logout} = useLogout();
    const handleClick=()=>{
        logout();
    }
    const {user} = useAuthcontext();
    return(
        <header>
        <div className="container">
            <Link to ='/'>
                <h1>Todoo Appp</h1>
            </Link>
        <nav>
            {user && (
            <div>
            <span>{user.email}</span>

                <button onClick={handleClick}>Log Out</button>
            </div>)
            }

            {!user &&( 
            <div>
                <Link to='/login'>Login</Link>
                 <Link to='/signup'>SignUp</Link>

            </div>
            )
            }
        </nav>
        </div>
        </header>
    )
}
export default Navbar;