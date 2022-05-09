import {} from ''

export const userInitialState = {
    name: '',
    email:'',
    password: ''
}



export const userReducer = (state, action) => {
    switch(action.type){
        case 'CHANGE_NAME'
            return {...state, name: action.payload.name}
        break
    }
}