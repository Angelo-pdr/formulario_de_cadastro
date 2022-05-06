import styled from 'styled-components'

export const Container = styled.div`
    height: 300px;
    width: 300px;
    background-color: #333333;
    color: white;
    border-radius: 10px;
    padding: 0px;
    text-align: center;
    
    .submit{
        margin-top: 10px;
        width: 50%;
        background-color: transparent;
        color: white;
        padding: 8px 1px;
        border: 1px solid white;
        cursor: pointer;
        
    }

`
export const HeaderText = styled.h1`
    text-align: center;
`
export const P = styled.p`
    margin-top: 30px;
    text-align: center;
    color: white;
    .link{
        color: white;
        text-decoration: none;
    }
    .link:hover{
        color: black;
        text-decoration: underline;
    }
`

