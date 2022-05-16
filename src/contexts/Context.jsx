import React from 'react'

export const AuthContext = React.createContext({})

export const AutoProvider = (props) => {
    const user ={
        name: '',
        email: '',
        password:'',
    }

    return(
        <AuthContext.Provider value={{user}}>{props.children}</AuthContext.Provider>
    )
}