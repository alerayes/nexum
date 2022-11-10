import { DISPLAY_ALERT, 
         CLEAR_ALERT,
         REGISTER_USER_BEGIN,
         REGISTER_USER_SUCCESS,
         REGISTER_USER_ERROR,
         LOGIN_USER_BEGIN,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_ERROR,
         JOB_POST_SUCCESS,
     } from "./actions"

const reducer = (state, action) => {

    if(action.type === DISPLAY_ALERT) {
        return {
            ...state,
            showAlert: true,
            alertType: 'error',
            alertText: 'Please provide all values'
        }
    }

    if(action.type === CLEAR_ALERT) {
        return {
            ...state,
            showAlert: false,
            alertType: '',
            alertText: '',
        }
    }
    
    if(action.type === REGISTER_USER_BEGIN){
        return {...state, isLoading: true }
    }

    if(action.type === REGISTER_USER_SUCCESS){
        return {
            ...state,
            user: action.payload.user,
            token: action.payload.token,
            isLoading: false,
            showAlert: true,
            alertType: 'success',
            alertText: 'User Created! Redirecting...'
        }
    }

    if(action.type === JOB_POST_SUCCESS){
        return {
            ...state,
            job: action.payload.job,
            token: action.payload.token,
            isLoading: false,
            showAlert: true,
            alertType: 'success',
            alertText: 'Job Created!'
        }
    }

    if(action.type === REGISTER_USER_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'error',
            alertText: action.payload.msg,
        }
    }
    
    if(action.type === LOGIN_USER_BEGIN){
        return {...state, isLoading: true }
    }

    if(action.type === LOGIN_USER_SUCCESS){
        return {
            ...state,
            user: action.payload.user,
            token: action.payload.token,
            isLoading: false,
            showAlert: true,
            alertType: 'success',
            alertText: 'Login Successful! Redirecting...'
        }
    }
    if(action.type === LOGIN_USER_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'error',
            alertText: action.payload.msg,
        }
    }

    throw new Error(`no such action: ${action.type}`)
}

export default reducer