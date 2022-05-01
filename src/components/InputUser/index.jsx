import {useState,KeyboardEvent} from 'react';
import * as C from './styles';

export const InputUser = () => {

    const [name, setName] = useState ('')
    const [email, setEmail] = useState('')

    const handleUser = () => {
        if( name.trim != '' && email != ''){
            console.log(name, email)
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