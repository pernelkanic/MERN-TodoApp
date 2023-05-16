import { useState } from 'react'
import { useAuthcontext } from './useAuthcontext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthcontext()
  
    const signup = async (email, password, name) => {
      setIsLoading(true)
      setError(null)
  
      const response = await fetch('http://localhost:4000/api/user/signup/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email, password, name })
      })
      const json = await response.json()
  
      if (!response.ok) {
        setIsLoading(false)
        setError(json.error)
      }
      if (response.ok) {
        // save the user to local storage
        localStorage.setItem('user', JSON.stringify(json))
  
        // update the auth context
        dispatch({type: 'LOGIN', payload: json})
  
        // update loading state
        setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}