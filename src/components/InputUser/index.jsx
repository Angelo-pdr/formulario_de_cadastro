import {useState,KeyboardEvent} from 'react';
import * as C from './styles';

export const InputUser = ({mostraTela}) => {

    const [name, setName] = useState ('')
    const [email, setEmail] = useState('')

    const handleUser = (event) => {
        if( name.trim() != '' && email.trim() != '' && event.onClick){
            mostraTela(name.t, email)
            
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
                onClick={handleUser}
            ></C.Input>
        </C.Area>
        <C.Area>
            <C.Input 
                types="email" 
                placeholder="Email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                onClick={handleUser}
            ></C.Input>
        </C.Area>
       </C.Container>
    )
}