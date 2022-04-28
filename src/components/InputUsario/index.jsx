import {useState} from 'react';
import * as C from './styles';

export const InputUsuario = ({title, type}) => {

    return(
        <C.Container>
            <C.Input types={type} placeholder={title}></C.Input>
        </C.Container>
    )
}