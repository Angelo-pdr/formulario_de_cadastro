import {useState,KeyboardEvent} from 'react';
import {InputPassword} from '../InputPassword'
import * as C from './styles';

export const InputUser = ({mostraTela}) => {

    const [name, setName] = useState ('')
    const [email, setEmail] = useState('')

    const handleUser = (event) => {
        if( name.trim() !== '' && email.trim() !== '' && event.onClick){
            mostraTela(name, email)
        }
    }

    return(
       <C.Container>
         <C.Area>
            <C.Input 
                types="text" 
                placeholder="Usuario"
                value={name.toLowerCase()}
                onChange={event => setName(event.target.value)}
                onKeyUp={handleUser}
            ></C.Input>
        </C.Area>
        <C.Area>
            <C.Input 
                types="email" 
                placeholder="Email"
                value={email.toLowerCase()}
                onChange={event => setEmail(event.target.value)}
                onKeyUp={handleUser}
            ></C.Input>
        </C.Area>
        
       </C.Container>
    )
}