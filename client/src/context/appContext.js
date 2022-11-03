import React, { useState, useReducer, useContext } from 'react'

export const initialState = {

}

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [state, setState] = useState(initialState)


    return (
        <AppContext.Provider
            value={{...state}}
        >
            {children}
        </AppContext.Provider>
    )
 }


export const UseAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider }