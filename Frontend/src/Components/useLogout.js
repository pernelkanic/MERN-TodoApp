import { useAuthcontext } from "./useAuthcontext";

export const useLogout=()=>{
    const {dispatch} = useAuthcontext();

    const logout = (e)=>{
        localStorage.removeItem('user');
        dispatch({type:'LOGOUT'})
    }
    return {logout}
}