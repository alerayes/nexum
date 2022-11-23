import { useState } from "react";
// import { useAuthContext } from './useAuthContext'

export const useJobpost = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    // const { dispatch } = useAuthContext()

    const jobpost = async (company , location, position, startdate, employmenttype, board, description ,joblink) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('https://nexum.wmdd4950.com/backend/api/v1/auth/jobPost', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({company , location, position, startdate, employmenttype, board, description ,joblink})
        })

        const json = await response.json

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            // save the user to local storage
            //localStorage.setItem('job', JSON.stringify(json))
            
            console.log(response);
            // update the auth context
            // dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
    }

    return { jobpost, isLoading, error }
}