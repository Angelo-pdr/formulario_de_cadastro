import styled from "styled-components";


export const Body = styled.body`
    background-color: #1C1F26;
    height: 100vh;
    width: 100vw;
    display:flex;
    align-items: center;
    justify-content: center;
    font-family: arial;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`

export const Container = styled.div`
    height: 400px;
    width: 350px;
    background-color: #333333;
    color: white;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
    
    .submit{
        margin-top: 20px;
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

export const Paragrafo = styled.p`
    text-align: center;
    font-size: 20px;

    .servido{
        color: #673AB7;
    }
`