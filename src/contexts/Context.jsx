import React,{createContext} from 'react'

const initialState ={
    email: '',
    password:''
}

export const Context =createContext(initialState)

export const ContextProvider =({children}) => {
    return(
        <ContextProvider value={initialState}>{children}</ContextProvider>
    )
}