import {useState, KeyboardEvent, useContext} from 'react';
import {AuthContext} from '../../../contexts/Context'
import * as C from './styles';

export const InputUser = () => {

    const {user} = useContext(AuthContext)
    const [name, setName] = useState ('')
    const [email, setEmail] = useState('')

    const handleUser = () => {
        if( name.trim() !== '' && email.trim() !== ''){
            user.name = name.toLowerCase()
            user.email = email.toLowerCase()
        }
    }

    return(
       <C.Container>
         <C.Area>
            <C.Input 
                types="text" 
                placeholder="Usuario"
                value={name}
                onChange={event => setName(event.target.value)}
                onKeyUp={handleUser}
            ></C.Input>
        </C.Area>
        <C.Area>
            <C.Input 
                types="email" 
                placeholder="Email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                onKeyUp={handleUser}
            ></C.Input>
        </C.Area>
        
       </C.Container>
    )
}