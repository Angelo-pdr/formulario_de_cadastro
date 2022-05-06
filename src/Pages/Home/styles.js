import styled from 'styled-components'

export const Container = styled.div`
    height: 280px;
    width: 300px;
    background-color: #333333;
    color: white;
    border-radius: 10px;
    padding: 0px;
    text-align: center;
    
    .submit{
        margin-top: 10px;
        width: 30%;
        background-color: transparent;
        color: white;
        padding: 8px 0px;
        border: 1px solid white;
        border-radius: 4px;
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
export const P = styled.p`
    margin-top: 20px;
    text-align: center;
    color: white;
    .link{
        color: white;
        text-decoration: none;
    }
    .link:hover{
        color: #673AB7;
        text-decoration: underline;
    }
`

