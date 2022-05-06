import styled from 'styled-components'

export const Container = styled.div`
    height: 350px;
    width: 300px;
    background-color: #333333;
    color: white;
    border-radius: 10px;
    padding: 0px;
    text-align: center;
    
    .submit{
        margin-top: 20px;
        width: 50%;
        background-color: transparent;
        color: white;
        padding: 8px 1px;
        border: 1px solid white;
        border-radius: 8px;
        cursor: pointer;
        
    }

    .submit:hover{
        color: #673AB7;
        border: 1px solid  #673AB7;
    }

`
export const HeaderText = styled.h1`
    text-align: center;
`

