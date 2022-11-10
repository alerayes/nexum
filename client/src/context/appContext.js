import React, {  useReducer, useContext } from 'react'
import reducer from './reducer'
import axios from 'axios'
import { DISPLAY_ALERT,
         CLEAR_ALERT,
         REGISTER_USER_BEGIN,
         REGISTER_USER_SUCCESS,
         REGISTER_USER_ERROR,
         JOB_POST_BEGIN,
         JOB_POST_SUCCESS,
         JOB_POST_ERROR,
         LOGIN_USER_BEGIN,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_ERROR,
         LOGOUT_USER,
         } from "./actions"


const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const job = localStorage.getItem('job')

export const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: user ? JSON.parse(user) : null,
    job: job ? JSON.parse(job) : null,
    token: token,
}

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const displayAlert = () => {
        dispatch({
            type: DISPLAY_ALERT
        })
        clearAlert()
    }

    const clearAlert = () => {
        setTimeout( () => {
            dispatch({
                type: CLEAR_ALERT
            })
        }, 3000)
    }

    const addUserToLocalStorage = ({ user, token}) => {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
    }

    const addJobToLocalStorage = ({ job, token}) => {
        localStorage.setItem('job', JSON.stringify(job))
        localStorage.setItem('token', token)
    }

    const removeUserFromLocalStorage = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    const registerUser = async (currentUser) => {
        dispatch({type: REGISTER_USER_BEGIN})
        try {
            const response = await axios.post('/api/v1/auth/register', currentUser)
            console.log(response)
            const { user, token } = response.data
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: {
                    user, 
                    token,
                },
            })
            addUserToLocalStorage({user, token})

        } catch (error) {  
            console.log(error.response)
            dispatch({
                type: REGISTER_USER_ERROR,
                payload: { msg: error.response.data.msg }
            })
        }
        clearAlert()
    }

    const registerJob = async (currentUser) => {
        dispatch({type: JOB_POST_BEGIN})
        try {
            const response = await axios.post('/api/v1/auth/jobPost', currentUser)
            console.log(response)
            const { job, token } = response.data
            dispatch({
                type: JOB_POST_SUCCESS,
                payload: {
                    job, 
                    token,
                },
            })
            addJobToLocalStorage({job, token})

        } catch (error) {  
            console.log(error.response)
            dispatch({
                type: JOB_POST_ERROR,
                payload: { msg: error.response.data.msg }
            })
        }
        clearAlert()
    }

    const loginUser = async (currentUser) => {
        dispatch({type: LOGIN_USER_BEGIN})
        try {
            const response  = await axios.post('/api/v1/auth/login', currentUser)
            // console.log(response)
            const { user, token } = response.data
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: {
                    user, 
                    token,
                },
            })
            addUserToLocalStorage({user, token})

        } catch (error) {  
            // console.log(error.response)
            dispatch({
                type: LOGIN_USER_ERROR,
                payload: { msg: error.response.data.msg }
            })
        }
        clearAlert()
    }

    const logoutUser = () => {
        dispatch({type: LOGOUT_USER})
        removeUserFromLocalStorage()
    }

    return (
        <AppContext.Provider
            value={{...state, displayAlert, registerUser, loginUser, registerJob, logoutUser}}
        >
            {children}
        </AppContext.Provider>
    )
 }


export const UseAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider }